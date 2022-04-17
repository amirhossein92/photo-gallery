import { Tag as AntdTag, TagProps } from "antd";
import classNames from "classnames";

import "./Tag.scss";

type Props = TagProps & {};

const Tag = ({ className, ...rest }: Props) => {
  return <AntdTag className={classNames("tag", className)} {...rest} />;
};

export default Tag;
