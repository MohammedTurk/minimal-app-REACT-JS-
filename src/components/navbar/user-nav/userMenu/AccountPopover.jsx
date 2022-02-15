import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, MenuItem, Typography, IconButton, Avatar } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
const IconSpan = styled("span")({
  fontSize: "10px",

  "& svg": {
    fontSize: "25px",
    margin: " 0px 12px 0 0",
  },
});
const MENU_OPTIONS = [
  {
    label: "Home",
    icon: <HomeIcon />,
    linkTo: "/",
  },
  {
    label: "Profile",
    icon: <PersonIcon />,
    linkTo: "/user/profile",
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
    linkTo: "/user/account",
  },
];

function AccountPopover(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <IconButton onClick={handleOpenUserMenu}>
        <Avatar alt="Remy Sharp" src="/static/avatar/avatar_6.jpg" />
      </IconButton>
      <Menu
        className="user-menu"
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {MENU_OPTIONS.map((item) => (
          <MenuItem
            className="user-menu-link"
            key={item.label}
            component={RouterLink}
            to={item.linkTo}
            onClick={handleCloseUserMenu}
          >
            <IconSpan className="user-icon">{item.icon}</IconSpan>
            <Typography textAlign="center">{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default AccountPopover;
