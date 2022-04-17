import { useInfiniteQuery } from "react-query";

import queryKey from "constants/queryKey";
import productService from "services/productService";

const useFetchProducts = () => {
  return useInfiniteQuery(
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
};

export default useFetchProducts;
