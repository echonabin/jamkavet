import React from "react";
import { Link } from "react-router-dom";

import "./LoadMore.css";

const LoadMore = ({ pageUrl, Title }) => {
  return (
    <Link to={pageUrl} className='btn-primary'>
      {Title}
    </Link>
  );
};

export default LoadMore;
