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
      blogs: response.data,
      isLoading: false,
    });
  }
  getBlog = (item) => {
    let tmpBlogs = [...this.state.blogs];
    // eslint-disable-next-line eqeqeq
    const blog = tmpBlogs.find((blog) => blog.id == item);
    return blog;
  };
  render() {
    return (
      <BlogContext.Provider value={{ ...this.state, getBlog: this.getBlog }}>
        {this.props.children}
      </BlogContext.Provider>
    );
  }
}
