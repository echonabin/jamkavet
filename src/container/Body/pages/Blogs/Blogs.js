import React, { useContext } from "react";
import "./Blogs.css";
import dummyblog from "./dummyblog.json";
import Blog from "./Blog";
import FeaturedBlog from "./Featured/FeaturedBlog";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import BlogContext from "../../../../context/blogs/BlogContext";
const blogs = dummyblog;
const Blogs = () => {
  const data = useContext(BlogContext);
  const blogsArray = data.blogs.data;
  console.log(blogsArray);
  if (data.isLoading === true) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <>
        <HeadingButton text='Latest' />
        <div className='band'>
          {blogsArray.map((blog) => {
            console.log(blog.images[0].url);
            if (blog.Featured) {
              return (
                <FeaturedBlog
                  key={blog.id}
                  item={blog.id}
                  header={blog.title}
                  headlines={blog.title}
                  author={blog.created_by.firstname}
                  thumbnail={blog.images[0].url}
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
              item={blog.id}
              header={blog.title}
              headlines={blog.title}
              author={blog.created_by.firstname}
              thumbnail={blog.images[0].url}
            />
          ))}
        </div>
      </>
    );
  }
};

export default Blogs;
