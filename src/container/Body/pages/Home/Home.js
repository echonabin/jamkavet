import React from "react";
import { Grid } from "@material-ui/core";

import VideoCard from "../Videos/VideoCard";
import HomeLayout from "./HomeLayout";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import FeaturedBlog from "../Blogs/Featured/FeaturedBlog";
import dummyblog from "../Blogs/dummyblog.json";
import "../Blogs/Blogs.css";
import LoadMore from "../../../../components/Buttons/LoadMore";

const blogs = dummyblog.filter(
  (featuredBlog) => featuredBlog.featured === true
);
const Home = () => {
  return (
    <>
      <HomeLayout>
        <HeadingButton text='Featured Blogs' />
        <div className='band'>
          {blogs.map((blog) => (
            <FeaturedBlog
              key={blog.id}
              item={blog.item}
              header={blog.header}
              headlines={blog.headlines}
              author={blog.author}
              thumbnail={blog.thumbnail}
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
};

export default Home;
