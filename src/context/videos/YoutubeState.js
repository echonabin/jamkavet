import React, { useReducer } from "react";
import youtube from "../../api/youtubeApi";
import videosContext from "./videosContext";
import videosReducer from "./videosReducer";
import { GET_VIDEOS } from "../types";
const YoutubeState = (props) => {
  const initialState = {
    videos: [],
  };
  const [state, dispatch] = useReducer(videosReducer, initialState);
  //Get Videos
  const getVideos = async () => {
    const response = await youtube.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: "PL4uCM6DTW62E3UV1m7wgGEsHiwrGh2cmK",
        key: "AIzaSyAuR63mqhbH0EVd73070DpRASuODidLEiQ",
        maxResults: "16",
      },
    });
    dispatch({
      type: GET_VIDEOS,
      payload: response.data.items,
    });
  };
  return (
    <videosContext.Provider
      value={{
        videos: state.videos,
      }}>
      {props.children}
    </videosContext.Provider>
  );
};

export default YoutubeState;
