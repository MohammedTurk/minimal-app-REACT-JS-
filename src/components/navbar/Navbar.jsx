import React, { useEffect } from "react";
import LeftMenu from "./leftMenu/LeftMenu";
import { AppBar, Toolbar, Container } from "@mui/material";
import MenuLg from "./menuLg/MenuLg";
import UserMenu from "./user-nav/userMenu/UserMenu";
import { makeStyles } from "@material-ui/styles";

const pages = [
  { label: "Events", linkTo: "/events" },
  { label: "Groups", linkTo: "/groups" },
  { label: "Club Management", linkTo: "/club" },
];
const useStyles = makeStyles({
  displayTop: {
    zIndex: 1100,
  },
});
const Navbar = () => {
  const classes = useStyles();

  const listenScrollEvent = (e) => {
    if (window.scrollY > 1) {
      document.querySelector("header").classList.add(classes.displayTop);
    } else {
      document.querySelector("header").classList.remove(classes.displayTop);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, [classes]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#fff", zIndex: 12 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: " space-between" }}>
          <LeftMenu
            pages={pages}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
          />
          <MenuLg anchorElNav={anchorElNav} pages={pages} />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
