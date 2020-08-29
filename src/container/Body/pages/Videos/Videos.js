import React, { Component } from "react";
import youtube from "../../../../api/youtubeApi";
import VideosList from "./VideosList";

export class Videos extends Component {
  state = {
    videos: [],
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
    console.log(this.state);
    return <VideosList videos={this.state.videos} />;
  }
}

export default Videos;
