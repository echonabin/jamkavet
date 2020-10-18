import React from "react";
import { Container, Grid } from "@material-ui/core";

import "./HomeLayout.css";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <div className='content'>
          <div className='overlay'>
            <img
              src={require("../../../../static/logoOnly.png")}
              alt='Logo'
              className='logo'
            />
            <h1
              className='top_head'
              style={{
                fontSize: "95px",
                fontFamily: "Amita, cursive",
                fontStyle: "italic",
              }}>
              जम्काभेट
            </h1>
            <q className='top_quote'>Information Unlimited</q>
            <br />
            <a
              href='https://www.youtube.com/channel/UCfLLnnT4jUUBxtUcUqIKPJQ'
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
