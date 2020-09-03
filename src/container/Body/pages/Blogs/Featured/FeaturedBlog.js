import React from "react";

import HeadingButton from "../../../../../components/Buttons/HeadingButton";
import "./FeaturedBlog.css";
import { Link } from "react-router-dom";
const FeaturedBlog = ({ item, header, headlines, author, thumbnail, data }) => {
  return (
    <>
      <Link
        to={"/blogs/" + item}
        className={`item-${item}`}
        style={{ textDecoration: "none" }}>
        <div className='card'>
          <div
            className='thumb'
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          />
          <article>
            <h1>{header}</h1>
            <p>{headlines}</p>
            <span>{author}</span>
          </article>
        </div>
      </Link>
    </>
  );
};

export default FeaturedBlog;
