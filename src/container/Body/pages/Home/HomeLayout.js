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
              Manka Kura is a reflection of inspiration, we will upload struggle
              stories and motivate videos.
            </p>
            <br />
            <a
              href='https://www.youtube.com/mankakura'
              className='btn btn-white btn-animated'>
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
