import { useState } from "react";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Image as AntdImage, ImageProps } from "antd";
import classNames from "classnames";

import "./Image.scss";

type Props = ImageProps & {
  src: string;
  domain?: string;
  href?: string;
};

const Image = ({ src, domain, href, ...rest }: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="image"
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
    >
      <AntdImage {...rest} src={src} preview={false} width={"100%"} />
      <a
        className={classNames("image__hover", {
          "image__hover--visible": isHovering,
        })}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image__hover-helper">Open</div>
        {domain && (
          <div className="image__hover-domain">
            <ArrowRightOutlined rotate={-45} />
            {domain}
          </div>
        )}
      </a>
    </div>
  );
};

export default Image;
