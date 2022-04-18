import { isEmpty } from "lodash";
import classNames from "classnames";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import iconSize from "constants/iconSize";

import Tag from "./Tag";

import "./TagList.scss";

type Props = {
  className: string;
  tags: string[];
  onSelect?: (tag: string) => void;
};

const TagList = ({ className, tags, onSelect, ...rest }: Props) => {
  if (isEmpty(tags)) return null;

  return (
    <ScrollingCarousel
      className={classNames("tag-list", className)}
      leftIcon={<LeftOutlined style={{ fontSize: iconSize.SM }} />}
      rightIcon={<RightOutlined style={{ fontSize: iconSize.SM }} />}
    >
      {tags.map((tag) => (
        <Tag key={tag} onClick={() => onSelect && onSelect(tag)}>
          {tag}
        </Tag>
      ))}
    </ScrollingCarousel>
  );
};

export default TagList;
