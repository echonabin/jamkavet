import React, { useContext } from "react";

import "./Blogs.css";
import Blog from "./Blog";
import FeaturedBlog from "./Featured/FeaturedBlog";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import BlogContext from "../../../../context/blogs/BlogContext";
import Loading from "../../../../components/Loading/Loading";

const Blogs = () => {
  const data = useContext(BlogContext);
  const blogsArray = data.blogs;
  console.log(blogsArray);
  if (data.isLoading === true) {
    return <Loading />;
  } else {
    return (
      <>
        <HeadingButton text='Latest' />
        <div className='band'>
          {blogsArray.map((blog) => {
            if (blog.Featured) {
              return (
                <FeaturedBlog
                  key={blog.id}
                  id={blog.id}
                  item={blog.CardPosition}
                  header={blog.title}
                  headlines={blog.description.slice(0, 100) + "....."}
                  author={blog.created_by.firstname}
                  thumbnail={blog.thumbnails.url}
                  data={blog}
                />
              );
            }
          })}
        </div>
        <HeadingButton text='Blogs' />
        <div className='band'>
          {blogsArray.map((blog) => (
            <Blog
              key={blog.id}
              id={blog.id}
              item={blog.CardPosition}
              header={blog.title}
              headlines={blog.description.slice(0, 100) + "....."}
              author={blog.created_by.firstname}
              thumbnail={blog.thumbnails.url}
            />
          ))}
        </div>
      </>
    );
  }
};

export default Blogs;
