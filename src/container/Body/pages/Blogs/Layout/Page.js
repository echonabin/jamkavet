import React from "react";
import "./Page.css";

const PageContainer = (props) => {
  return <div className='wholecontainer'>{props.children}</div>;
};

export default PageContainer;
