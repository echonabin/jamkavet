import React, { Component } from "react";
import BlogsContext from "../../../../../context/fullblogs/BlogsContext";
import BlogSingle from "../../Blogs/BlogSinglePage/BlogSingle";

class Recommended extends Component {
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
    const renderedList = state.blogs.data
      .slice(0, this.state.visible)
      .map((blog) => {
        if (blog.categories.includes(10)) {
          return (
            <BlogSingle
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
    return (
      <div className='SingleBlogContainer'>
        <div className='band'>{renderedList}</div>
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
      </div>
    );
  }
}

export default Recommended;
