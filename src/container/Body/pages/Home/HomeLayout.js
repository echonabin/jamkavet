import React from "react";
import { Container, Grid } from "@material-ui/core";

import "./HomeLayout.css";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <div className='content'>
          <div className='overlay'>
            <h1>Jamkavhet</h1>
            <q>Reflection of Insipiration</q>
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
