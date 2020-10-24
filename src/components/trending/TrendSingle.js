import React, { Component } from "react";
import axios from "axios";
import Trend from "./Trend";

class TrendSingle extends Component {
  state = {
    imageUrl: "",
    authorName: "",
    authorIcon: "",
  };
  componentDidMount() {
    const { mediaItem, authorItem } = this.props;
    const imageItem = axios.get(
      `https://api.jamkabhet.com/wp-json/wp/v2/media/${mediaItem}`
    );
    const authorName = axios.get(
      `https://api.jamkabhet.com/wp-json/wp/v2/users/${authorItem}`
    );
    Promise.all([imageItem, authorName]).then((res) => {
      if (res[0].data.media_details.sizes.medium_large) {
        this.setState({
          imageUrl: res[0].data.media_details.sizes.medium_large.source_url,
          authorName: res[1].data.name,
          authorIcon: res[1].data.avatar_urls[24],
        });
      } else {
        this.setState({
          imageUrl: res[0].data.media_details.sizes.full.source_url,
          authorName: res[1].data.name,
          authorIcon: res[1].data.avatar_urls[24],
        });
      }
    });
  }
  render() {
    const { id, CardPosition, title, description } = this.props;
    return (
      <Trend
        key={id}
        id={id}
        item={CardPosition}
        header={title}
        headlines={description}
        author={this.state.authorName}
        thumbnail={this.state.imageUrl}
        authorIcon={this.state.authorIcon}
      />
    );
  }
}

export default TrendSingle;
