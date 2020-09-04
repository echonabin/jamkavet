import React from "react";
import { useContext } from "react";

import Loading from "../../../../components/Loading/Loading";
import VideosList from "./VideosList";
import VideoContext from "../../../../context/videos/VideosContext";

const Videos = () => {
  const state = useContext(VideoContext);
  const videoItems = state.videos;
  const { items } = videoItems;
  if (!items) {
    return <Loading />;
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
