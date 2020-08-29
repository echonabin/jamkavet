import React from "react";
import { Container } from "@material-ui/core";

import "./HomeLayout.css";

const HomeLayout = ({ children }) => {
  return (
    <>
      <div className='content'>
        <div className='overlay'>
          <h1>Hello</h1>
          <p>This is our Website</p>
          <br />
          <a href='/' className='btn btn-white btn-animated'>
            Subscribe
          </a>
        </div>
      </div>
      <Container>{children}</Container>
    </>
  );
};

export default HomeLayout;
