import React, { Component } from "react";

import VideoContext from "./VideosContext";
import youtube from "../../api/youtubeApi";
export class VideoState extends Component {
  state = {
    videos: [],
    featuredVideo: [],
    selectedVideo: null,
    openModal: false,
  };
  async componentDidMount() {
    const response = await youtube.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: "UUZ9-B7ebuPUc3zfSu7TaDKw",
        key: "AIzaSyAuR63mqhbH0EVd73070DpRASuODidLEiQ",
        maxResults: "16",
      },
    });
    this.setState({
      videos: response.data,
    });
    console.log(this.state.videos);
  }
  render() {
    return (
      <VideoContext.Provider value={this.state}>
        {this.props.children}
      </VideoContext.Provider>
    );
  }
}

export default VideoState;
