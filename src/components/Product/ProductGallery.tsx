import classNames from "classnames";
import { isEmpty } from "lodash";

import { Product } from "types/product";
import ProductCard from "./ProductCard";

import "./ProductGallery.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  items: Product[] | undefined;
};

const ProductGallery = ({ items, className, ...rest }: Props) => {
  return (
    <div className={classNames("product-gallery", className)} {...rest}>
      {items &&
        !isEmpty(items) &&
        items.map((item, index) => <ProductCard key={index} {...item} />)}
    </div>
  );
};

export default ProductGallery;
