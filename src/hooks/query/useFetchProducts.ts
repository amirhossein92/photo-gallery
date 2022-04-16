import { useQuery } from "react-query";

import queryKey from "constants/queryKey";
import productService from "services/productService";

const useFetchProducts = () => {
  return useQuery(queryKey.PRODUCTS(), async () => {
    const products = await productService.getAll();
    return products;
  });
};

export default useFetchProducts;
