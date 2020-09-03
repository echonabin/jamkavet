import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blog = ({ item, header, headlines, author, thumbnail }) => {
  const urlForImage = "http://localhost:1337";
  return (
    <Link
      to={"/blogs/" + item}
      className={`item-${item}`}
      style={{ textDecoration: "none" }}>
      {/* <div className={`item-${item}`}> */}
      <div className='card'>
        <div
          className='thumb'
          style={{
            backgroundImage: `url(${urlForImage}${thumbnail})`,
          }}
        />
        <article>
          <h1>{header}</h1>
          <p>{headlines} </p>
          <span>{author}</span>
        </article>
      </div>
      {/* </div> */}
    </Link>
  );
};

export default Blog;
