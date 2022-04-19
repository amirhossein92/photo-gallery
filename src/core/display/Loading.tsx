import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import iconSize from "constants/iconSize";

import "./Loading.scss";

type Props = {
  className?: string;
  isLoading: boolean;
};

const Loading = ({ className, isLoading, ...rest }: Props) => {
  return (
    <Spin
      size="large"
      tip={"Loading..."}
      indicator={<LoadingOutlined style={{ fontSize: iconSize.LG }} spin />}
      className="loading"
      spinning={isLoading}
    />
  );
};

export default Loading;
