import React, { Component } from "react";

import VideoContext from "./VideosContext";
import youtube from "../../api/youtubeApi";
export class VideoState extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    openModal: false,
  };
  async componentDidMount() {
    const response = await youtube.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: "PL4uCM6DTW62E3UV1m7wgGEsHiwrGh2cmK",
        key: "AIzaSyAuR63mqhbH0EVd73070DpRASuODidLEiQ",
        maxResults: "16",
      },
    });
    this.setState({
      videos: response.data.items,
    });
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
