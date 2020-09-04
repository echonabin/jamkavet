import React from "react";
import VideosList from "./VideosList";
import { useContext } from "react";
import VideoContext from "../../../../context/videos/VideosContext";

const Videos = () => {
  const state = useContext(VideoContext);
  const videoItems = state.videos;
  const { items } = videoItems;
  if (!items) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <VideosList
        videos={items}
        onVideoSelect={state.handelVideoSelect}
        isOpen={state.openModal}
        handelClose={state.handelModalClose}
        selectedVideo={state.selectedVideo}
        handelModalClose={state.handelModalClose}
      />
      ;
    </>
  );
};

export default Videos;
