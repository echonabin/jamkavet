import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  ViberIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from "react-share";

import "./SocialShare.css";
import HelmetMetaData from "../Helmet/HelmetMetaData";

const SocialShare = ({ url, title, description, image }) => {
  return (
    <>
      <HelmetMetaData
        title={title}
        description={description}
        image={image}></HelmetMetaData>
      <div className='share_button'>
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={30} />
          <FacebookShareCount url={url} />
        </FacebookShareButton>
        <TwitterShareButton url={url} quote={title}>
          <TwitterIcon size={30} />
        </TwitterShareButton>
        <ViberShareButton url={url} quote={title}>
          <ViberIcon size={30} />
        </ViberShareButton>
        <FacebookMessengerShareButton url={url} quote={title}>
          <FacebookMessengerIcon size={30} />
        </FacebookMessengerShareButton>
      </div>
    </>
  );
};

export default SocialShare;
