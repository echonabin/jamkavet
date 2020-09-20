import React, { Component } from "react";
import BlogsContext from "../../context/fullblogs/BlogsContext";
import "./TrendingCard.scss";
import { withRouter } from "react-router-dom";
import TrendSingle from "./TrendSingle";

class TrendingCard extends Component {
  static contextType = BlogsContext;
  render() {
    const { state } = this.context;
    console.log(state);
    if (state.isLoading) {
      return <h1>Loading.....</h1>;
    }
    const renderedList = state.blogs.data.map((blog) => {
      console.log("category", blog.categories.toString());
      if (blog.categories.includes(7)) {
        return (
          <TrendSingle
            id={blog.id}
            CardPosition={blog.id}
            title={blog.title.rendered}
            description={blog.excerpt.rendered.slice(0, 75) + "...."}
            mediaItem={blog.featured_media}
            authorItem={blog.author}
          />
        );
      }
      return null;
    });
    return <div className='trendContainer'>{renderedList}</div>;
  }
}

export default withRouter(TrendingCard);
