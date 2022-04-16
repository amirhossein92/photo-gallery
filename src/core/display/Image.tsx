import { Image as AntdImage, ImageProps } from "antd";

import "./Image.scss";

type Props = ImageProps & {};

const Image = (props: Props) => {
  return <AntdImage {...props} />;
};

export default Image;
