import React from "react";
import { useContext } from "react";

import HomeLayout from "./HomeLayout";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import FeaturedBlog from "../Blogs/Featured/FeaturedBlog";
import "../Blogs/Blogs.css";
import LoadMore from "../../../../components/Buttons/LoadMore";
import BlogContext from "../../../../context/blogs/BlogContext";
import Loading from "../../../../components/Loading/Loading";
import VideoContext from "../../../../context/videos/VideosContext";
import VideosList from "../Videos/VideosList";
const Home = () => {
  const data = useContext(BlogContext);
  //Featured videos data from context api
  const state = useContext(VideoContext);
  const videoArray = state.featuredVideo;
  if (!videoArray) {
    return <Loading />;
  }
  //Featured videos variable ended here!!
  const blogsArray = data.blogs;
  if (!blogsArray) {
    return <Loading />;
  } else {
    const filterBlogs = blogsArray.filter((blog) => blog.Featured === true);

    return (
      <>
        <HomeLayout>
          {/* Remember there should only be 3 items on each */}
          <HeadingButton text='Inspiring' />
          <HeadingButton text='Interesting' />
          <HeadingButton text='Recommended' />
          <HeadingButton text='Featured Blogs' />
          <div className='band'>
            {filterBlogs.map((blog) => (
              <FeaturedBlog
                id={blog.id}
                key={blog.id}
                item={blog.CardPosition}
                header={blog.title}
                headlines={blog.description.slice(0, 100) + "....."}
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
          <VideosList
            onVideoSelect={state.handelVideoSelect}
            videos={videoArray}
            isOpen={state.openModal}
            handelClose={state.handelModalClose}
            selectedVideo={state.selectedVideo}
            handelModalClose={state.handelModalClose}
          />
          <LoadMore pageUrl='/videos' Title='See More' />
        </HomeLayout>
      </>
    );
  }
};

export default Home;
