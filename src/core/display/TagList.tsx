import { isEmpty } from "lodash";

import Tag from "./Tag";

import "./TagList.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tags: string[];
};

const TagList = ({ tags, ...rest }: Props) => {
  if (isEmpty(tags)) return null;

  return (
    <div className="tag-list" {...rest}>
      {tags.map((tag) => (
        <Tag key={tag} title={tag} />
      ))}
    </div>
  );
};

export default TagList;
