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
  history,
}) => {
  return (
    <Link
      to={{ pathname: `/${id}`, hash: `#${header}` }}
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
          <div dangerouslySetInnerHTML={{ __html: headlines }} />
          <span>
            {author}
            <img src={authorIcon} alt='author' />
          </span>
        </article>
      </div>
    </Link>
  );
};

export default Blog;
