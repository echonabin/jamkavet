import React from "react";
import { useContext } from "react";

import HomeLayout from "./HomeLayout";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import "../Blogs/Blogs.css";
import LoadMore from "../../../../components/Buttons/LoadMore";
import Loading from "../../../../components/Loading/Loading";
import VideoContext from "../../../../context/videos/VideosContext";
import VideosList from "../Videos/VideosList";
import Interesting from "./Interesting/Interesting";
import Inspiring from "./Inspiring/Inspiring";
import Recommended from "./Recommended/Recommended";

const Home = () => {
  const state = useContext(VideoContext);
  const videoArray = state.featuredVideo;
  if (!videoArray) {
    return <Loading />;
  }
  return (
    <>
      <HomeLayout>
        {/* Remember there should only be 3 items on each */}
        <HeadingButton text='Inspiring' />

        <Inspiring />

        <LoadMore pageUrl='/inspiring' Title='See More' />
        <HeadingButton text='Interesting' />

        <Interesting />

        <LoadMore pageUrl='/interesting' Title='See More' />
        <HeadingButton text='Recommended' />

        <Recommended />

        <LoadMore pageUrl='/recommended' Title='See More' />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}></div>
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
};

export default Home;
