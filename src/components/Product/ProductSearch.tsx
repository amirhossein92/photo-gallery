import classNames from "classnames";

import SearchWithSuggestionInput from "core/input/SearchWithSuggestionInput";

import "./ProductSearch.scss";

type Props = {
  className?: string;
  onChange: (searchValue: string) => void;
  tags: string[] | undefined;
};

const ProductSearch = ({ className, onChange, tags }: Props) => {
  return (
    <div className={classNames("product-search", className)}>
      <SearchWithSuggestionInput
        suggestions={tags}
        onSearchChanged={onChange}
        placeholder={"Search for easy dinners, fashion, etc."}
      />
    </div>
  );
};

export default ProductSearch;
