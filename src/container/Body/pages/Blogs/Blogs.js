import React from "react";
import "./Blogs.css";
import dummyblog from "./dummyblog.json";
import Blog from "./Blog";

const blogs = dummyblog;

const Blogs = () => {
  return (
    <div>
      <header>
        <h1>Blogs</h1>
      </header>
      <div className='band'>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            item={blog.item}
            header={blog.header}
            headlines={blog.headlines}
            author={blog.author}
            thumbnail={blog.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
