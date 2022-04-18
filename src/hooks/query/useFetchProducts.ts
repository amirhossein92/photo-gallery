import { useInfiniteQuery } from "react-query";

import queryKey from "constants/queryKey";
import productService from "services/productService";
import { useMemo } from "react";

const useFetchProducts = ({
  currentTopic = null,
}: {
  currentTopic: string | null;
}) => {
  const {
    data: productPages,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    queryKey.PRODUCTS(),
    async () => {
      const products = await productService.getAll();
      return products;
    },
    {
      getNextPageParam: (lastPage) => {
        return true;
      },
    }
  );

  const products = useMemo(() => {
    return productPages?.pages.reduce((prev, curr) => prev.concat(curr), []);
  }, [productPages]);

  const filteredProducts = useMemo(() => {
    return products?.filter(
      (q) => !currentTopic || q.tags.includes(currentTopic)
    );
  }, [products, currentTopic]);

  const topTags = useMemo(() => {
    return products
      ?.map((q) => q.tags)
      .flat()
      .slice(0, 100);
  }, [products]);

  return {
    isFetching,
    hasNextPage,
    fetchNextPage,
    filteredProducts,
    topTags,
  };
};

export default useFetchProducts;
