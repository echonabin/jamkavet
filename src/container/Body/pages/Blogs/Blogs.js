import React from "react";
import "./Blogs.css";
import dummyblog from "./dummyblog.json";
import Blog from "./Blog";
import FeaturedBlog from "./Featured/FeaturedBlog";
import HeadingButton from "../../../../components/Buttons/HeadingButton";

const blogs = dummyblog;

const Blogs = () => {
  return (
    <>
      <HeadingButton text='Latest' />
      <div className='band'>
        {blogs.map((blog) => {
          if (blog.featured) {
            return (
              <FeaturedBlog
                key={blog.id}
                item={blog.item}
                header={blog.header}
                headlines={blog.headlines}
                author={blog.author}
                thumbnail={blog.thumbnail}
              />
            );
          }
        })}
      </div>
      <HeadingButton text='Blogs' />
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
    </>
  );
};

export default Blogs;
