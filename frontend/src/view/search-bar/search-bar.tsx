import React, { FC, useState } from "react";

import * as text from "../../assets/text";
import { SearchContainer, IconMagnifyingGlass, SearchInput } from "./styles";
import { Row } from "../atoms/container";
import { useHistory } from "react-router-dom";
import { route } from "../../assets";
import { HorizontalBorder } from "../atoms/lines";
import { color } from "../../design-system";

export const SearchBar: FC = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  const searchBarState = () => {
    setShowSearchInput(true);
  };

  const submitSearch = () => {
    setShowSearchInput(false);
    setSearchValue("");
    if (searchValue) history.push(`${route.results}/${searchValue}`);
  };

  return (
    <SearchContainer showSearchInput={showSearchInput}>
      <Row>
        <SearchInput type="text" placeholder={text.search} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        {showSearchInput ? <IconMagnifyingGlass onClick={submitSearch} /> : <IconMagnifyingGlass onClick={searchBarState} />}
      </Row>
      <HorizontalBorder customColor={color.white} />
    </SearchContainer>
  );
};
