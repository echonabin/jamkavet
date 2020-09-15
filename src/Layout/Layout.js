import React from "react";
import { Grid } from "@material-ui/core";

import Navbar from "../ToolBar/Navbar";
import Bottombar from "../ToolBar/Bottombar";

const Layout = (props) => {
  return (
    <Grid container>
      <Navbar />
      <div style={{ marginBottom: "5.7rem" }} />
      <Grid item xs={12} md={12}>
        <main>{props.children}</main>
        <Bottombar />
      </Grid>
    </Grid>
  );
};

export default Layout;
