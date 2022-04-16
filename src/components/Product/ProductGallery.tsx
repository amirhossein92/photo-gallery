import classNames from "classnames";

import { Product } from "types/product";
import PhotoCard from "./ProductCard";

import "./ProductGallery.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  items: Product[];
};

const ProductGallery = ({ items, className, ...rest }: Props) => {
  return (
    <div className={classNames("product-gallery", className)} {...rest}>
      {items.map((item, index) => (
        <PhotoCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ProductGallery;
