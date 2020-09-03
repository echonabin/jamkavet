import React, { Component } from "react";
import blog from "../../api/blogApi";
import BlogContext from "./BlogContext";
export default class BlogState extends Component {
  state = {
    blogs: [],
    isLoading: true,
    featuredBlogs: [],
  };
  async componentDidMount() {
    const response = await blog.get("/Blogs");
    this.setState({
      blogs: response,
      isLoading: false,
    });
    console.log(this.state.blogs);
  }
  render() {
    return (
      <BlogContext.Provider value={this.state}>
        {this.props.children}
      </BlogContext.Provider>
    );
  }
}
