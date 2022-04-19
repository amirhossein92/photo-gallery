import { forwardRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, InputProps, InputRef } from "antd";
import classNames from "classnames";

import "./SearchInput.scss";

type Props = InputProps & {};

const SearchInput = forwardRef<InputRef, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <Input
        id="search"
        prefix={<SearchOutlined />}
        className={classNames("search-input", className)}
        {...rest}
        size="large"
        ref={ref}
      />
    );
  }
);

export default SearchInput;
