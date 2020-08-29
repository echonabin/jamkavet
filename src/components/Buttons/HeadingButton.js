import React from "react";

import "./HeadingButton.css";

const HeadingButton = ({ text }) => {
  return (
    <div>
      <div className='container'>
        <div className='shadows'>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default HeadingButton;
