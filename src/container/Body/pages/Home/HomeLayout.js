import React from "react";
import { Container, Grid } from "@material-ui/core";

import "./HomeLayout.css";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <div className='content'>
          <div className='overlay'>
            <div style={{margin: "-108px"}}>
            <img
              src={require("../../../../static/logoTop.png")}
              alt='Logo'
              className='logo'
            />
            <q className='top_quote'>Information Unlimited</q>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href='https://www.youtube.com/channel/UCfLLnnT4jUUBxtUcUqIKPJQ'
              className='btn btn-white btn-animated'>
              Subscribe
            </a>
            </div>
          </div>
        </div>
        <Container>{children}</Container>
      </Grid>
    </>
  );
};

export default HomeLayout;
