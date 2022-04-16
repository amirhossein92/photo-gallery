import classNames from "classnames";

import "./PhotoGallery.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {};

const PhotoGallery = ({ className, ...rest }: Props) => {
  return <div className={classNames("photo-gallery", className)} {...rest} />;
};

export default PhotoGallery;
