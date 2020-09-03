import React from "react";
import { Grid } from "@material-ui/core";
import { useContext } from "react";

import VideoCard from "../Videos/VideoCard";
import HomeLayout from "./HomeLayout";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import FeaturedBlog from "../Blogs/Featured/FeaturedBlog";
import "../Blogs/Blogs.css";
import LoadMore from "../../../../components/Buttons/LoadMore";
import BlogContext from "../../../../context/blogs/BlogContext";
import Loading from "../../../../components/Loading/Loading";
const Home = () => {
  const data = useContext(BlogContext);
  const blogsArray = data.blogs.data;
  if (!blogsArray) {
    return <Loading />;
  } else {
    const filterBlogs = blogsArray.filter((blog) => blog.Featured === true);
    return (
      <>
        <HomeLayout>
          <HeadingButton text='Featured Blogs' />
          <div className='band'>
            {filterBlogs.map((blog) => (
              <FeaturedBlog
                key={blog.id}
                item={blog.CardPosition}
                header={blog.title}
                headlines={blog.title}
                author={blog.created_by.firstname}
                thumbnail={blog.thumbnails.url}
                data={blog}
              />
            ))}
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <LoadMore pageUrl='/blogs' Title='See More' />
          </div>
          <HeadingButton text='Featured Videos' />
        </HomeLayout>
      </>
    );
  }
};

export default Home;
