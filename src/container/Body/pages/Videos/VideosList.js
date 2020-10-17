import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import VideoCard from "./VideoCard";
import ModalVideo from "react-modal-video";
import "./VideoModal.css";

const VideosList = ({
  videos,
  onVideoSelect,
  isOpen,
  handelClose,
  selectedVideo,
  path,
}) => {
  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8);
  };
  const renderList = videos.slice(0, visible).map((video) => {
    return (
      <Grid item xs={12} sm={4} md={3} key={video.id}>
        <VideoCard
          src={video.snippet.thumbnails.high.url}
          onVideoSelect={onVideoSelect}
          video={video}
          title={video.snippet.title}
        />
      </Grid>
    );
  });
  if (!selectedVideo) {
    return (
      <>
        <Grid container spacing={0}>
          {renderList}
        </Grid>
        {path.location.pathname === "/videos" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1em",
            }}>
            <button className='btn-primary' onClick={showMoreItems}>
              Load More
            </button>
          </div>
        )}
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
