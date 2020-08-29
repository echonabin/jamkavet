import React from "react";

import "./VideoCard.css";

const VideoCard = ({ src, title }) => {
  return (
    <div className='cards'>
      <figure className='card'>
        <a href='/'>
          <img src={src} alt='Need to add video title' />
          <figcaption>{title}</figcaption>
        </a>
      </figure>
    </div>
  );
};

export default VideoCard;
