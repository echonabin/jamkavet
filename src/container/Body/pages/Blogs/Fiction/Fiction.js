import React, { Component } from "react";
import BlogsContext from "../../../../../context/fullblogs/BlogsContext";
import BlogSingle from "../BlogSinglePage/BlogSingle";
import HeadingButton from "../../../../../components/Buttons/HeadingButton";
import PageContainer from "../Layout/Page";
import TrendingCard from "../../../../../components/trending/TrendingCard";
import {withRouter} from 'react-router-dom'

class Fiction extends Component {
  static contextType = BlogsContext;
  render() {
    const { state } = this.context;
    if (state.isLoading) {
      return <h1>Loading.....</h1>;
    }
    const renderedList = state.blogs.data.map((blog) => {
      if (blog.categories.includes(6)) {
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
          <HeadingButton text='Fiction' />
          <div className='band'>{renderedList}</div>
        </div>
        <div className='trending'>
          <HeadingButton text='trending' />
          <TrendingCard />
        </div>
      </PageContainer>
    );
  }
}

export default withRouter(Fiction);
