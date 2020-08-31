import React from "react";

import "./HeadingButton.css";

const HeadingButton = ({ text }) => {
  return (
    <div className='section-title'>
      <h4>{text}</h4>
      <div />
    </div>
  );
};

export default HeadingButton;
