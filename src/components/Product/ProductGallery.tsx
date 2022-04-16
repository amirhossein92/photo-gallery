import classNames from "classnames";
import { isEmpty } from "lodash";
import Masonry from "react-masonry-css";

import { Product } from "types/product";
import ProductCard from "./ProductCard";

import "./ProductGallery.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  items: Product[] | undefined;
};

const breakpointColumnsObj = {
  default: 6,
  1100: 4,
  700: 2,
  500: 1,
};

const ProductGallery = ({ items, className, ...rest }: Props) => {
  return (
    <div className={classNames("product-gallery", className)} {...rest}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="product-gallery__grid"
        columnClassName="product-gallery__grid-column"
      >
        {items &&
          !isEmpty(items) &&
          items.map((item, index) => <ProductCard key={index} {...item} />)}
      </Masonry>
    </div>
  );
};

export default ProductGallery;
