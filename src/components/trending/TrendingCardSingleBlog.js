import React, { Component } from "react";
import axios from "axios";
import Trend from "./Trend";

class TrendingCardSingleBlog extends Component {
  state = {
    imageUrl: "",
    authorName: "",
    authorIcon: "",
  };
  componentDidMount() {
    const { mediaItem, authorItem } = this.props;
    console.log(mediaItem, authorItem);
    const imageItem = axios.get(
      `http://localhost:8000/wp-json/wp/v2/media/${mediaItem}`
    );
    const authorName = axios.get(
      `http://localhost:8000/wp-json/wp/v2/users/${authorItem}`
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
    console.log(this.state);
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

export default TrendingCardSingleBlog;
