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
      main: "#e4e4e4",
    },
  },
});

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <HideNavBar {...props}>
          <AppBar color='primary' style={{padding:"20px"}}>
            <Toolbar className={classes.root}>
              <div style={{marginBottom: "-32px",marginTop: "-38px"}}>
              <Link to='/' style={{textDecoration: "none"}}>
                <img src={require("../static/logoOnly.png")} alt="logo" style={{width:"60px"}}/>
              <h1
              className='top_head'
              style={{
                fontSize: "35px",
                fontFamily: "Amita, cursive",
                fontStyle: "italic",
                color:"#FFF",
                textShadow: "1px 1px 1px #333",
                margin: "-30px"
              }}>
              जम्काभेट
            </h1>
              </Link>
            </div>
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
