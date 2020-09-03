import React from "react";
import { Container, Grid } from "@material-ui/core";

import "./HomeLayout.css";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <div className='content'>
          <div className='overlay'>
            <h1>JamkaVet</h1>
            <p>
              Relif the pain, feel our content!!Don't forget to subscribe us
              👇👇
            </p>
            <br />
            <a href='/' className='btn btn-white btn-animated'>
              Subscribe
            </a>
          </div>
        </div>
        <Container>{children}</Container>
      </Grid>
    </>
  );
};

export default HomeLayout;
