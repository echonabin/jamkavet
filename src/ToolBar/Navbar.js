import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HideNavBar from "./NavbarHide/HideNavBar";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

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
      main: "#f5f5f5",
    },
  },
});

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <HideNavBar {...props}>
          <AppBar color='primary'>
            <Toolbar className={classes.root}>
              <Link to='/'>
                <img
                  alt='icon'
                  src={require("../static/logo.png")}
                  style={{ width: "85px", marginTop: ".5em" }}
                />
              </Link>
              <div className={classes.grow} />
              <nav className='stroke'>
                <ul>
                  <li>
                    <NavLink to='/' exact>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/people'>People</NavLink>
                  </li>
                  <li>
                    <NavLink to='/place'>Place</NavLink>
                  </li>
                  <li>
                    <NavLink to='/brand'>Brand</NavLink>
                  </li>
                  <li>
                    <NavLink to='/history'>History</NavLink>
                  </li>
                  <li>
                    <NavLink to='/fiction'>Fiction</NavLink>
                  </li>
                  <li>
                    <NavLink to='/videos'>Videos</NavLink>
                  </li>
                </ul>
              </nav>
            </Toolbar>
          </AppBar>
        </HideNavBar>
        <Toolbar />
      </ThemeProvider>
    </>
  );
}
