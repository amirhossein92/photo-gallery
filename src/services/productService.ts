import { Product } from "types/product";
import https from "./https";

const productService = {
  getAll: (): Promise<Product[]> => {
    return https.get("/data/mock.json").then((res) => {
      const products = res.data as Array<any>;

      return products.map(
        (product) =>
          ({
            ...product,
            tags: product.tags.split(","),
            imageUrl: product.image_url,
            href: product.url,
            description: product.description,
          } as unknown as Product)
      );
    });
  },
};
export default productService;
