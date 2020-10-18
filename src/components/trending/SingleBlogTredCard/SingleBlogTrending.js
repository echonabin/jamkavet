import React, { Component } from "react";
import BlogsContext from "../../../context/fullblogs/BlogsContext";
import "../TrendingCard.scss";
import { withRouter } from "react-router-dom";
import TrendingCardSingleBlog from "../TrendingCardSingleBlog";

class SingleBlogTrending extends Component {
  state = {
    visible: 4,
  };
  showMoreItems = () => {
    this.setState({
      visible: this.state.visible + 4,
    });
  };
  static contextType = BlogsContext;
  render() {
    const { state } = this.context;
    if (state.isLoading) {
      return <h1>Loading.....</h1>;
    }
    const renderedList = state.blogs.data.slice(0, this.state.visible).map((blog) => {
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
    return <>
    <div className='trendContainer_singleBlog'>{renderedList}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1.5em",
              padding: "1em",
            }}>
            <button className='btn-primary' onClick={this.showMoreItems}>
              Load More
            </button>
          </div>
    </>;
  }
}

export default withRouter(SingleBlogTrending);
