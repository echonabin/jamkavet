import React, { Component } from "react";

import youtube from "../../../../api/youtubeApi";
import VideosList from "./VideosList";

export class Videos extends Component {
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
  handelVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
      openModal: true,
    });
  };
  handelModalClose = () => {
    this.setState({
      openModal: false,
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <VideosList
          videos={this.state.videos}
          onVideoSelect={this.handelVideoSelect}
          isOpen={this.state.openModal}
          handelClose={this.handelModalClose}
          selectedVideo={this.state.selectedVideo}
          handelModalClose={this.handelModalClose}
        />
        ;
      </>
    );
  }
}

export default Videos;
