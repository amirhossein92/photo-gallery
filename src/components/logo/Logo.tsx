import classNames from "classnames";

import LogoSrc from "assets/logo.svg";

import "./Logo.scss";

type Props = {
  className?: string;
};
const Logo = ({ className, ...rest }: Props) => {
  return (
    <img
      className={classNames("logo", className)}
      src={LogoSrc}
      alt={"Brand Logo"}
    />
  );
};

export default Logo;
