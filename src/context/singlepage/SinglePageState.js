import React, { Component } from "react";
import axios from "axios";
import SinglePageContext from "./SinglePageContext";
export default class SinglePageState extends Component {
  state = {
    blogs: [],
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://api.jamkabhet.com/wp-json/wp/v2/blog"
    );
    this.setState({
      blogs: response.data,
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
      <SinglePageContext.Provider
        value={{ ...this.state, getBlog: this.getBlog }}>
        {this.props.children}
      </SinglePageContext.Provider>
    );
  }
}
