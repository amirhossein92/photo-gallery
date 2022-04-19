import { useState } from "react";
import { Col, Row, Typography } from "antd";

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
      <Row className="topic__header" gutter={8}>
        <Col xs={18} md={4} lg={2}>
          <Logo />
        </Col>
        <Col xs={6} md={2} lg={2}>
          <a className="topic__header-link" href="/">
            Explore
          </a>
        </Col>
        <Col xs={24} md={18} lg={20}>
          <ProductSearch
            className="topic__header-search"
            onChange={setCurrentTopic}
            tags={topTags}
          />
        </Col>
      </Row>
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
