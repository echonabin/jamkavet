import React, { useReducer } from "react";
import axios from "axios";
import videosContext from "./videosContext";
import videosReducer from "./videosReducer";

const YoutubeState = (props) => {
  const initialState = {
    videos: [],
  };
  const [state, dispatch] = useReducer(videosReducer, initialState);
  //Get Videos

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
