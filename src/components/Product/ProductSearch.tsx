import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

import SearchInput from "core/input/SearchInput";

import "./ProductSearch.scss";

type Props = {
  onChange: (searchValue: string) => void;
  tags: string[] | undefined;
};
const ProductSearch = ({ onChange, tags }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSearchChanged = useCallback(
    debounce((value: string) => {
      onChange(value);
    }, 300),
    [onChange]
  );

  useEffect(() => {
    onSearchChanged(searchValue);
  }, [searchValue, onSearchChanged]);

  const relatedTags = useMemo(() => {
    if (!tags) return [];
    return tags.filter((tag) => tag.includes(searchValue)).slice(0, 10);
  }, [searchValue, tags]);

  return (
    <div className="product-search">
      <SearchInput
        placeholder="Search for easy dinners, fashion, etc."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        list="tag-suggestions"
        allowClear
      />
      <datalist id="tag-suggestions">
        {relatedTags.slice(0, 10).map((tag, index) => (
          <option key={index} value={tag} />
        ))}
      </datalist>
    </div>
  );
};

export default ProductSearch;
