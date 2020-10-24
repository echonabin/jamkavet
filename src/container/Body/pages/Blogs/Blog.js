import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blog = ({
  item,
  header,
  headlines,
  author,
  thumbnail,
  id,
  authorIcon,
}) => {
  return (
    <Link
      to={{ pathname: `/${id}`, hash: "#jamkabhet_story" }}
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
          <span>
            <img src={authorIcon} alt='author' />
            {author}
          </span>
        </article>
      </div>
    </Link>
  );
};

export default Blog;
