import { InputHTMLAttributes } from "react";

import "./SearchInput.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {};

const SearchInput = (props: Props) => {
  return <input className="search-input" {...props} />;
};

export default SearchInput;
