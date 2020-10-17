import React, { Component } from "react";
import BlogsContext from "../../../context/fullblogs/BlogsContext";
import "../TrendingCard.scss";
import { withRouter } from "react-router-dom";
import TrendingCardSingleBlog from "../TrendingCardSingleBlog";

class SingleBlogTrending extends Component {
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
          <TrendingCardSingleBlog
            key={blog.id}
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
    return <div className='trendContainer_singleBlog'>{renderedList}</div>;
  }
}

export default withRouter(SingleBlogTrending);
