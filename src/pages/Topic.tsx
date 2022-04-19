import { useState } from "react";
import { Typography } from "antd";

import useFetchProducts from "hooks/query/useFetchProducts";

import ProductGallery from "components/Product/ProductGallery";
import ProductSearch from "components/Product/ProductSearch";
import Logo from "components/logo/Logo";

import "./Topic.scss";

type Props = {};

const Topic = ({ ...rest }: Props) => {
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);

  const { filteredProducts, hasNextPage, fetchNextPage, isFetching, topTags } =
    useFetchProducts({
      currentTopic,
    });

  return (
    <div className="topic">
      <div className="topic__header">
        <Logo />
        <a className="topic__header-link" href="/">
          Explore
        </a>
        <ProductSearch
          className="topic__header-search"
          onChange={setCurrentTopic}
          tags={topTags}
        />
      </div>
      <Typography.Title className="topic__title" level={2}>
        {currentTopic}
      </Typography.Title>
      {currentTopic && (
        <p className="topic__count">{filteredProducts?.length} Pins</p>
      )}
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
