import { SearchOutlined } from "@ant-design/icons";
import { Input, InputProps } from "antd";
import classNames from "classnames";

import "./SearchInput.scss";

type Props = InputProps & {};

const SearchInput = ({ className, ...rest }: Props) => {
  return (
    <Input
      id="search"
      prefix={<SearchOutlined />}
      className={classNames("search-input", className)}
      {...rest}
      size="large"
    />
  );
};

export default SearchInput;
