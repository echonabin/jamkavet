import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./sass/index.scss";
import Blog from "../../container/Body/pages/Blogs/Blog";

class ItemPage extends Component {
  state = {
    imageUrl: [],
    authorName: [],
    authorIcon: [],
    isLoading: true,
    category: [],
  };
  componentDidMount() {
    const { mediaItem, authorItem, category } = this.props;
    console.log(mediaItem);
    console.log(authorItem);
    const imageItem = axios.get(
      `http://localhost:8000/wp-json/wp/v2/media/${mediaItem}`
    );
    const authorName = axios.get(
      `http://localhost:8000/wp-json/wp/v2/users/${authorItem}`
    );
    Promise.all([imageItem, authorName]).then((res) => {
      this.setState({
        imageUrl: res[0].data.media_details.sizes.medium_large.source_url,
        authorName: res[1].data.name,
        authorIcon: res[1].data.avatar_urls[24],
      });
    });
    this.setState({
      category,
    });
  }
  render() {
    const HeaderItem = () => {
      return (
        <>
          {/* Head card */}
          <div className='__headcard'>
            {/* Link here need to be change after single Card display */}

            <Link to='/' style={{ cursor: "pointer" }}>
              <div className='_content'>
                <div className='_title'>
                  <h3>{this.props.title}</h3>
                  <span>{this.props.date}</span>
                  <Link to='/' className='_author'>
                    <p className='name'>{this.state.authorName}</p>
                    <img
                      src={this.state.authorIcon}
                      alt='icon'
                      style={{ borderRadius: "200px" }}
                    />
                  </Link>
                </div>
                <img src={this.state.imageUrl} alt='Thumbnail' />
              </div>
            </Link>
          </div>
        </>
      );
    };
    const ContainerIt = () => {
      return <div className='page_container'>{this.props.children}</div>;
    };
    const headArr = this.state.category.filter((head) => head === 11);
    const headItem = headArr.toString();
    const featArr = this.state.category.filter((feat) => feat === 7);
    const featItem = featArr.toString();
    const peopleArr = this.state.category.filter((people) => people === 3);
    const peopleItem = peopleArr.toString();
    if (headItem) {
      return (
        <>
          <ContainerIt>
            <HeaderItem />
            <Blog />
          </ContainerIt>
        </>
      );
    }
    return null;
  }
}

export default ItemPage;
