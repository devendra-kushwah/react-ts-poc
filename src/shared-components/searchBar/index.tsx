import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { Search, StyledInputBase } from "./style";

const SearchBar = () => {
  return (
    <Search>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Search>
  );
};

export default SearchBar;
