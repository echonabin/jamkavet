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
import VideoContext from "../../../../context/videos/VideosContext";
const Home = () => {
  const data = useContext(BlogContext);
  //Featured videos data from context api
  const FeaturedVids = useContext(VideoContext);
  const videoArray = FeaturedVids.videos.items;
  if (!videoArray) {
    return <Loading />;
  }
  //Featured videos variable ended here!!
  const blogsArray = data.blogs.data;
  if (!blogsArray) {
    return <Loading />;
  } else {
    const filterBlogs = blogsArray.filter((blog) => blog.Featured === true);

    const onVideoSelect = {};

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
          <Grid container>
            {videoArray.map((video) => (
              <Grid item xs={12} md={3} key={video.id}>
                <VideoCard
                  src={video.snippet.thumbnails.medium.url}
                  onVideoSelect={onVideoSelect}
                  video={video}
                />
              </Grid>
            ))}
          </Grid>
        </HomeLayout>
      </>
    );
  }
};

export default Home;
