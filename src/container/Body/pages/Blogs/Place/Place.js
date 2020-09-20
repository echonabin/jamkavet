import React, { Component } from "react";
import BlogsContext from "../../../../../context/fullblogs/BlogsContext";
import BlogSingle from "../BlogSinglePage/BlogSingle";
import HeadingButton from "../../../../../components/Buttons/HeadingButton";
import PageContainer from "../Layout/Page";
import TrendingCard from "../../../../../components/trending/TrendingCard";

class Place extends Component {
  static contextType = BlogsContext;
  render() {
    const { state } = this.context;
    console.log(state);
    if (state.isLoading) {
      return <h1>Loading.....</h1>;
    }
    const renderedList = state.blogs.data.map((blog) => {
      if (blog.categories.includes(2)) {
        return (
          <BlogSingle
            category={blog.categories}
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
          <HeadingButton text='Place' />
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

export default Place;
