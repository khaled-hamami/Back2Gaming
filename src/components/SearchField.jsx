import styled from "@emotion/styled"
import React from "react"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   borderRadius: theme.shape.borderRadius,
   backgroundColor: "rgba(255,255,255,0.15)",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
   },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(0.5, 1, 0.5, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "12ch",
         "&:focus": {
            width: "20ch",
         },
      },
   },
}))

function SearchField() {
   return (
      <Search>
         <SearchIconWrapper>
            <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
      </Search>
   )
}

export default SearchField
