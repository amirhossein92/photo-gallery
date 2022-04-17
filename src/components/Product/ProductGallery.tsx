import { useMemo } from "react";

import classNames from "classnames";
import { isEmpty } from "lodash";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroller";

import useFetchProducts from "hooks/query/useFetchProducts";

import ProductCard from "./ProductCard";

import "./ProductGallery.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {};

const breakpointColumnsObj = {
  default: 6,
  1100: 4,
  700: 2,
  500: 1,
};

const ProductGallery = ({ className, ...rest }: Props) => {
  const { data: productPages, hasNextPage, fetchNextPage } = useFetchProducts();

  const products = useMemo(() => {
    return productPages?.pages.reduce((prev, curr) => prev.concat(curr), []);
  }, [productPages]);

  return (
    <div className={classNames("product-gallery", className)} {...rest}>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => fetchNextPage()}
        hasMore={hasNextPage}
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
              <ProductCard key={index} {...item} />
            ))}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};

export default ProductGallery;
