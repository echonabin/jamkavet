import React from "react";
import { useContext } from "react";

import HomeLayout from "./HomeLayout";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import "../Blogs/Blogs.css";
import LoadMore from "../../../../components/Buttons/LoadMore";
import VideoContext from "../../../../context/videos/VideosContext";
import VideosList from "../Videos/VideosList";
import Interesting from "./Interesting/Interesting";
import Inspiring from "./Inspiring/Inspiring";
import Recommended from "./Recommended/Recommended";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = (history) => {
  const state = useContext(VideoContext);
  const videoArray = state.featuredVideo;
  if (!videoArray) {
    return <CircularProgress color='secondary' />;
  }
  return (
    <>
      <HomeLayout>
        {/* Remember there should only be 3 items on each */}
        <HeadingButton text='नयाँनाैलाे' />

        <Inspiring />

        <HeadingButton text='संघर्ष र सफलता' />

        <Interesting />

        <HeadingButton text='पत्रपत्रिका' />

        <Recommended />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}></div>
        <HeadingButton text='जम्काभेट युट्युब च्यानल' />
        <VideosList
          onVideoSelect={state.handelVideoSelect}
          videos={videoArray}
          isOpen={state.openModal}
          handelClose={state.handelModalClose}
          selectedVideo={state.selectedVideo}
          handelModalClose={state.handelModalClose}
          path={history}
        />
        <LoadMore pageUrl='/videos' Title='See More' />
      </HomeLayout>
    </>
  );
};

export default Home;
