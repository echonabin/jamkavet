import React from "react";
import { Link } from "react-router-dom";

import "./LoadMore.css";

const LoadMore = ({ pageUrl, Title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "10px",
      }}>
      <Link to={pageUrl} className='btn-primary'>
        {Title}
      </Link>
    </div>
  );
};

export default LoadMore;
