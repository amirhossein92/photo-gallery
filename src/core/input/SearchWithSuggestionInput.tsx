import { useMemo, useRef, useState } from "react";
import { InputRef, List, Popover } from "antd";
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

  const inputRef = useRef<InputRef>(null);

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
      className={classNames("search-input-with-suggestion", className)}
      overlayClassName="search-input-with-suggestion__popover"
      trigger={"click"}
      visible={isPopoverVisible}
      onVisibleChange={setIsPopoverVisible}
      overlayInnerStyle={{ width: inputRef.current?.input?.clientWidth }}
      content={
        <List
          className="search-input-with-suggestion__list"
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
        ref={inputRef}
      />
    </Popover>
  );
};

export default SearchWithSuggestionInput;
