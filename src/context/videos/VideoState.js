import React, { Component } from "react";

import ftVideoId from "../../api/blogApi";
import VideoContext from "./VideosContext";
import youtube from "../../api/youtubeApi";
export class VideoState extends Component {
  state = {
    videos: [],
    videosId: [],
    selectedVideo: null,
    openModal: false,
  };
  async componentDidMount() {
    const params = new URLSearchParams();
    params.append("part", "snippet");
    params.append("part", "statistics");
    params.append("id", ["8KbUubuELPs", "2b8xPJLQWUw"]);
    params.append("key", "AIzaSyAuR63mqhbH0EVd73070DpRASuODidLEiQ");
    const request = {
      params: params,
    };
    const response = await youtube.get("/videos", request);
    this.setState({
      videos: response.data,
    });
    const Idresponse = await ftVideoId.get("/featured-videos");
    const videoIdArr = Idresponse.data;
    console.log(videoIdArr);
    videoIdArr.map((videoId) => {
      const ftVideoId = videoId.VideoID;
      const arr = ftVideoId.split();
      const newArray = this.state.videosId.concat(arr);
      this.setState({
        videosId: newArray,
      });
      console.log(arr);
    });
    console.log(this.state.videosId);
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
