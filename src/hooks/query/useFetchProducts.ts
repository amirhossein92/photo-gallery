import { useMemo } from "react";
import { isEmpty } from "lodash";
import { useInfiniteQuery } from "react-query";

import queryKey from "constants/queryKey";
import productService from "services/productService";

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
    async ({ pageParam = 1 }) => {
      const products = await productService.getAll(pageParam);
      return { products, page: pageParam };
    },
    {
      getNextPageParam: (lastPage) => {
        if (isEmpty(lastPage.products)) return false;
        return lastPage.page + 1;
      },
    }
  );

  const products = useMemo(() => {
    return productPages?.pages
      .map((q) => q.products)
      .reduce((prev, curr) => prev.concat(curr), []);
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
