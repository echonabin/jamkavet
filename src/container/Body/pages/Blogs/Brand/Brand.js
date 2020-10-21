import React, { Component } from "react";
import BlogsContext from "../../../../../context/fullblogs/BlogsContext";
import BlogSingle from "../BlogSinglePage/BlogSingle";
import HeadingButton from "../../../../../components/Buttons/HeadingButton";
import PageContainer from "../Layout/Page";
import TrendingCard from "../../../../../components/trending/TrendingCard";
import {withRouter} from 'react-router-dom'
import Loading from "../../../../../components/Loading/Loading";

class Brand extends Component {
  state = {
    visible: 8,
  };
  showMoreItems = () => {
    this.setState({
      visible: this.state.visible + 8,
    });
  };
  static contextType = BlogsContext;
  render() {
    const { state } = this.context;
    if (state.isLoading) {
      return <Loading />;
    }
    const renderedList = state.blogs.data.slice(0, this.state.visible).map((blog) => {
      if (blog.categories.includes(4)) {
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
      <PageContainer>
        <div className='SingleBlogContainer'>
          <HeadingButton text='Brand' />
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
        <div className='trending'>
          <HeadingButton text='trending' />
          <TrendingCard />
        </div>
      </PageContainer>
    );
  }
}

export default withRouter(Brand);
