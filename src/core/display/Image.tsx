import { Image as AntdImage, ImageProps } from "antd";
import classNames from "classnames";
import { useState } from "react";

import "./Image.scss";

type Props = ImageProps & {
  src: string;
  sourceWebsite?: string;
  href?: string;
};

const Image = ({ src, sourceWebsite, href, ...rest }: Props) => {
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
        <div className="image__hover-source">
          {sourceWebsite ?? "website.com"}
        </div>
      </a>
    </div>
  );
};

export default Image;
