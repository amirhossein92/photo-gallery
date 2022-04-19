import { GithubOutlined } from "@ant-design/icons";
import classNames from "classnames";

import iconSize from "constants/iconSize";

import "./GithubShare.scss";

type Props = {
  className?: string;
};

export const GithubShare = ({ className, ...rest }: Props) => {
  return (
    <a
      className={classNames("github-share", className)}
      href={`https://github.com/amirhossein92/photo-gallery`}
    >
      <GithubOutlined style={{ fontSize: iconSize.LG }} />
    </a>
  );
};
