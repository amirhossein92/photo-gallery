import { Tag as AntdTag, TagProps } from "antd";

import "./Tag.scss";

type Props = TagProps & {};

const Tag = (props: Props) => {
  return <AntdTag {...props} />;
};

export default Tag;
