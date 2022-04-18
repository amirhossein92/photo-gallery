import { useState } from "react";

import useFetchProducts from "hooks/query/useFetchProducts";

import ProductGallery from "components/product/ProductGallery";
import ProductSearch from "components/product/ProductSearch";

import "./Topic.scss";
import { Typography } from "antd";

type Props = {};

const Topic = ({ ...rest }: Props) => {
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);

  const { filteredProducts, hasNextPage, fetchNextPage, isFetching, topTags } =
    useFetchProducts({
      currentTopic,
    });

  return (
    <div className="topic">
      <ProductSearch onChange={setCurrentTopic} tags={topTags} />
      <Typography.Title className="topic__title" level={2}>
        {currentTopic}
      </Typography.Title>
      <p className="topic__count">{filteredProducts?.length} Pins</p>
      <ProductGallery
        products={filteredProducts}
        onTagSelect={setCurrentTopic}
        fetchNextPage={() => fetchNextPage()}
        hasMorePage={hasNextPage}
        isLoading={isFetching}
      />
    </div>
  );
};

export default Topic;
