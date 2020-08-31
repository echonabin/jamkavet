import React from "react";
import { Grid } from "@material-ui/core";

import VideoCard from "./VideoCard";
import SearchBox from "../../../../components/Boxes/SearchBox";
import ModalVideo from "react-modal-video";
import "./VideoModal.css";

const VideosList = ({
  videos,
  onVideoSelect,
  isOpen,
  handelClose,
  selectedVideo,
  handelModalClose,
}) => {
  const renderList = videos.map((video) => {
    return (
      <Grid item xs={12} sm={4} md={3} key={video.id}>
        <VideoCard
          src={video.snippet.thumbnails.medium.url}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      </Grid>
    );
  });
  if (!selectedVideo) {
    return (
      <>
        <SearchBox />
        <Grid container spacing={0}>
          {renderList}
        </Grid>
      </>
    );
  }
  return (
    <>
      <ModalVideo
        channel='youtube'
        isOpen={isOpen}
        videoId={selectedVideo.snippet.resourceId.videoId}
        onClose={handelClose}
      />
      <Grid container spacing={0}>
        {renderList}
      </Grid>
    </>
  );
};
export default VideosList;
