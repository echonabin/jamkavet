import React from "react";

import "./VideoCard.css";

const VideoCard = ({ src, title, video, onVideoSelect }) => {
  return (
    <div className='cards'>
      <figure className='card'>
        <div onClick={() => onVideoSelect(video)}>
          <img src={src} alt='Need to add video title' />
          <figcaption>{title}</figcaption>
        </div>
      </figure>
    </div>
  );
};

export default VideoCard;
