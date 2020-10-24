import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HideNavBar from "./NavbarHide/HideNavBar";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import NavItems from "./NavItems";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  active: {
    color: "secondary",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f6870b",
    },
  },
});

export default function HideAppBar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const handelDrawerToggle = () => {
    setShowMenu(!showMenu);
  };
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <HideNavBar {...props}>
          <AppBar color='primary' style={{ padding: "20px" }}>
            <Toolbar className={classes.root}>
              <div style={{ marginBottom: "-32px", marginTop: "-38px" }}>
                <Link to='/' style={{ textDecoration: "none" }}>
                  <img
                    src={require("../static/logoOnly.png")}
                    alt='logo'
                    style={{ width: "60px" }}
                  />
                  <h1
                    className='top_head'
                    style={{
                      fontSize: "35px",
                      fontFamily: "Amita, cursive",
                      fontStyle: "italic",
                      color: "#FFF",
                      textShadow: "1px 1px 1px #333",
                      margin: "-30px",
                    }}>
                    जम्काभेट
                  </h1>
                </Link>
              </div>
              <div className={classes.grow} />
              {window.innerWidth <= 480 && (
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={handelDrawerToggle}
                  edge='start'>
                  <MenuIcon />
                </IconButton>
              )}
              {showMenu && (
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className='mobile_nav'>
                  <ul>
                    <li>
                      <NavLink
                        to='/'
                        activeClassName='active'
                        exact
                        onClick={handelDrawerToggle}>
                        गृहपृष्ठ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/people'
                        activeClassName='active'
                        onClick={handelDrawerToggle}>
                        सेलिब्रेटी
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/place' onClick={handelDrawerToggle}>
                        राष्ट्रसेवक
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/brand' onClick={handelDrawerToggle}>
                        भूईंमान्छे
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/podcast' onClick={handelDrawerToggle}>
                        पडकास्ट
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/videos' onClick={handelDrawerToggle}>
                        भिडियाे
                      </NavLink>
                    </li>
                  </ul>
                  {(window.onscroll = handelDrawerToggle)}
                </div>
              )}

              <NavItems />
            </Toolbar>
          </AppBar>
        </HideNavBar>
        <Toolbar />
      </ThemeProvider>
    </>
  );
}
