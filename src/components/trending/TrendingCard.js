import React, { Component } from "react";
import BlogSingle from "../../container/Body/pages/Blogs/BlogSinglePage/BlogSingle";
import BlogsContext from "../../context/fullblogs/BlogsContext";
import "./TrendingCard.scss";
import { withRouter } from "react-router-dom";

class TrendingCard extends Component {
  static contextType = BlogsContext;
  render() {
    const { history } = this.props;
    const { state } = this.context;
    console.log(state);
    if (state.isLoading) {
      return <h1>Loading.....</h1>;
    }
    const renderedList = state.blogs.data.map((blog) => {
      console.log("category", blog.categories.toString());
      if (blog.categories.includes(7)) {
        return (
          <BlogSingle
            id={blog.id}
            CardPosition={blog.id}
            title={blog.title.rendered}
            description={blog.excerpt.rendered.slice(0, 75) + "...."}
            mediaItem={blog.featured_media}
            authorItem={blog.author}
            history={history}
          />
        );
      }
      return null;
    });
    return <div className='trendContainer'>{renderedList}</div>;
  }
}

export default withRouter(TrendingCard);
