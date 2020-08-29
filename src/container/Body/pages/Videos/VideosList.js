import React from "react";
import { Grid } from "@material-ui/core";

import VideoCard from "./VideoCard";

const VideosList = ({ videos }) => {
  const renderList = videos.map((video) => {
    return (
      <Grid item xs={12} sm={4} md={3} key={video.id}>
        <VideoCard src={video.snippet.thumbnails.medium.url} />
      </Grid>
    );
  });
  return (
    <Grid container spacing={0}>
      {renderList}
    </Grid>
  );
};

export default VideosList;
