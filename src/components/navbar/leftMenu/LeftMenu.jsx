import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Typography, Menu, Box, IconButton, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const LinkItem = styled(Link)(({ theme }) => ({
  fontWeight: 400,
  color: "#212B36",
  fontSize: "17px",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  textDecoration: "none",
  padding: "10px",
  transition: " .4s",
  position: "relative",

  "&:hover": {
    textDecoration: "none",
    color: theme.palette.grey[600],
  },
  "&.active": {
    color: theme.palette.primary.main,
  },
}));
// import "./LeftMenu.css";
function LeftMenu({
  pages,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "flex" } }}
      >
        <img
          src="/static/Vector.svg"
          style={{ width: "35px", height: "52px" }}
          alt="logo"
        />
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        <IconButton
          className="hum-menu"
          size="large"
          aria-controls="menu-res"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          style={{
            color: "#000",
            marginLeft: "10px",
            width: "50px",
            height: "50px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-res"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
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
        </Menu>
      </Box>
    </Box>
  );
}

export default LeftMenu;
