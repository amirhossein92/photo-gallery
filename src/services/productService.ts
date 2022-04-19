import { Product } from "types/product";
import https from "./https";

const productService = {
  getAll: (page: number = 1): Promise<Product[]> => {
    const query = new URLSearchParams();
    query.append("offset", (page - 1) * 20 + "");

    return https.get(`http://xoosha.com/ws/1/test.php?${query}`).then((res) => {
      const products = res.data as Array<any>;

      return products.map(
        (product) =>
          ({
            ...product,
            tags: product.tags.split(","),
            imageUrl: product.image_url,
            href: product.url,
            description: product.description,
            domain: product.domain,
          } as unknown as Product)
      );
    });
  },
};
export default productService;
