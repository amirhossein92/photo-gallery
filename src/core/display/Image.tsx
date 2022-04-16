import { Image as AntdImage, ImageProps } from "antd";

import "./Image.scss";

type Props = ImageProps & {};

const Image = (props: Props) => {
  return <AntdImage {...props} preview={false} width={"100%"} />;
};

export default Image;
