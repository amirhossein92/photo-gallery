import { useEffect, useMemo, useState } from "react";
import { List, Popover } from "antd";
import classNames from "classnames";

import SearchInput from "./SearchInput";

import "./SearchWithSuggestionInput.scss";

type Props = {
  className?: string;
  placeholder?: string;
  onSearchChanged: (searchValue: string) => void;
  suggestions: string[] | undefined;
};

const SearchWithSuggestionInput = ({
  className,
  placeholder,
  onSearchChanged,
  suggestions,
}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const relatedTags = useMemo(() => {
    if (!suggestions) return [];
    return suggestions
      .filter((suggestion) => suggestion.includes(searchValue))
      .slice(0, 10);
  }, [searchValue, suggestions]);

  const onSelect = (suggestion: string) => {
    onSearchChanged(suggestion);
    setSearchValue(suggestion);
    setIsPopoverVisible(false);
  };

  return (
    <Popover
      className={classNames("search-input-with-sugestion", className)}
      overlayClassName="search-input-with-sugestion__popover"
      trigger={"click"}
      visible={isPopoverVisible}
      onVisibleChange={setIsPopoverVisible}
      content={
        <List
          className="search-input-with-sugestion__list"
          dataSource={relatedTags}
          renderItem={(suggestion) => (
            <li onClick={() => onSelect(suggestion)}>{suggestion}</li>
          )}
        />
      }
    >
      <SearchInput
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        allowClear
        autoComplete="off"
        spellCheck={false}
      />
    </Popover>
  );
};

export default SearchWithSuggestionInput;
