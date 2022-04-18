import classNames from "classnames";
import { isEmpty } from "lodash";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroller";

import { Product } from "types/product";

import ProductCard from "./ProductCard";

import "./ProductGallery.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  products: Product[] | undefined;
  onTagSelect: (tag: string) => void;
  fetchNextPage: (page: number) => void;
  hasMorePage: boolean | undefined;
  isLoading: boolean;
};

const breakpointColumnsObj = {
  default: 6,
  1100: 4,
  700: 2,
  500: 1,
};

const ProductGallery = ({
  products,
  fetchNextPage,
  hasMorePage,
  className,
  onTagSelect,
  ...rest
}: Props) => {
  return (
    <div className={classNames("product-gallery", className)}>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchNextPage}
        hasMore={hasMorePage}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="product-gallery__grid"
          columnClassName="product-gallery__grid-column"
        >
          {products &&
            !isEmpty(products) &&
            products.map((item, index) => (
              <ProductCard key={index} {...item} onTagSelect={onTagSelect} />
            ))}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};

export default ProductGallery;
