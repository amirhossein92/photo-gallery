import SearchWithSuggestionInput from "core/input/SearchWithSuggestionInput";

import "./ProductSearch.scss";

type Props = {
  onChange: (searchValue: string) => void;
  tags: string[] | undefined;
};

const ProductSearch = ({ onChange, tags }: Props) => {
  return (
    <div className="product-search">
      <SearchWithSuggestionInput
        suggestions={tags}
        onSearchChanged={onChange}
        placeholder={"Search for easy dinners, fashion, etc."}
      />
    </div>
  );
};

export default ProductSearch;
