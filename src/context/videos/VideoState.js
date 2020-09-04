import React, { useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer";

import VideoContext from "./VideosContext";
import youtube from "../../api/youtubeApi";
import {
  HANDEL_VIDEO_SELECT,
  HANDEL_MODAL_CLOSE,
  HANDEL_SET_VIDEOS,
  HANDEL_FEATURE_VIDEOS,
} from "../types";

const VideoState = (props) => {
  const initialstate = {
    videos: [],
    featuredVideo: [],
    selectedVideo: null,
    openModal: false,
  };
  useEffect(async () => {
    const response = await youtube.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: "UUZ9-B7ebuPUc3zfSu7TaDKw",
        key: "AIzaSyAuR63mqhbH0EVd73070DpRASuODidLEiQ",
        maxResults: "16",
      },
    });
    //Set Videos
    dispatch({
      type: HANDEL_SET_VIDEOS,
      payload: response.data,
    });
    //Set featured videos
    const allVideos = response.data.items;
    const featuredOne = allVideos.slice(0, 8);
    dispatch({
      type: HANDEL_FEATURE_VIDEOS,
      payload: featuredOne,
    });
  }, []);
  //Set selected Video
  const handelVideoSelect = (video) => {
    dispatch({
      type: HANDEL_VIDEO_SELECT,
      payload: video,
    });
  };
  //Set openModal
  const handelModalClose = () => {
    dispatch({
      type: HANDEL_MODAL_CLOSE,
    });
  };
  //Set featured Video
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        featuredVideo: state.featuredVideo,
        selectedVideo: state.selectedVideo,
        openModal: state.openModal,
        handelVideoSelect,
        handelModalClose,
      }}>
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoState;
