import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  OutlinedInput,
  FormControl,
  InputAdornment,
} from "@mui/material";

const LinkItem = styled(Link)(({ theme }) => ({
  marginTop: "17px",
  fontWeight: 400,
  color: " #212B36",
  fontSize: "17px",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  textDecoration: "none",
  margin: 0,
  padding: "0 10px",
  transition: " .4s",
  position: "relative",

  "&:hover": {
    textDecoration: "none",
    color: theme.palette.grey[600],
  },
  "&.active": {
    color: theme.palette.primary.main,
    "&::after": {
      display: "block",
    },
  },
  "&::after": {
    content: `""`,
    position: "absolute",
    left: 0,
    bottom: "-19px",
    width: "100%",
    height: "3px",
    backgroundColor: "#00ab55",
    display: "none",
    borderRadius: "12px 12px 0 0",
  },
}));
const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  transition: theme.transitions.create("box-shadow", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),

  backgroundColor: theme.palette.grey[200],

  marginRight: "20px",
  borderRadius: "34px",

  "& fieldset": {
    border: "none",
  },

  "& svg": {
    color: theme.palette.grey[600],
  },
}));
function MenuLg({ pages, handleCloseNavMenu }) {
  return (
    <div className="nav-menu">
      <Box
        justifyContent="space-between"
        alignItems="center"
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
        }}
      >
        <FormControl size="small">
          <SearchStyle
            placeholder="Search..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        {pages.map((page) => (
          <LinkItem
            component={RouterLink}
            className="link-menu"
            to={page.linkTo}
            key={page.label}
            onClick={handleCloseNavMenu}
          >
            {page.label}
          </LinkItem>
        ))}
      </Box>
    </div>
  );
}

export default MenuLg;
