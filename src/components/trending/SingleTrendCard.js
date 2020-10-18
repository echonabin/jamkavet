import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SinglePageContext from "../../context/singlepage/SinglePageContext";
import SingleBlogTrending from "./SingleBlogTredCard/SingleBlogTrending";
import SocialShare from "../SocialShare/SocialShare";
import HeadingButton from "../Buttons/HeadingButton";
import Loading from "../Loading/Loading";

const SingleTrendCard = (props) => {
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [authoricon, setAuthoricon] = useState("");

  const { getBlog } = useContext(SinglePageContext);
  const [blogId] = useState(props.match.params.blogId);
  const [historyId] = useState(props);
  const blog = getBlog(blogId);
  if (!blog) {
    return (
      <Loading />
    );
  }
  const imageItem = axios.get(
    `http://localhost:8000/wp-json/wp/v2/media/${blog.featured_media}`
  );
  const authorName = axios.get(
    `http://localhost:8000/wp-json/wp/v2/users/${blog.author}`
  );
  Promise.all([imageItem, authorName]).then((res) => {
    setAuthor(res[1].data.name);
    setThumbnail(res[0].data.media_details.sizes.full.source_url);
    setAuthoricon(res[1].data.avatar_urls[96]);
  });

  return (
    <div className='container'>
      {/* Article section */}
      <div className='__article'>
        <div className='__article_heading'>
          <div className='title'>
            <h3>{blog.title.rendered}</h3>
          </div>
          <div className='__article_date'>
            <div className='item'>
              <h4>{blog.date.slice(0, 10)}</h4>
              <a href='https://facebook.com/journalistjang' className='author'>
                <img src={authoricon} alt='icon' />
                <span className='name'>{author}</span>
              </a>
            </div>
            <div className='social_share'>
              <SocialShare
                url={window.location.href}
                title={blog.title.rendered}
              />
            </div>
          </div>
        </div>
        <section className='_post'>
          <div className='_item-zoom'>
            <a href='/'>
              <img src={thumbnail} alt='post Img' />
            </a>
          </div>
          <div className='_content'>
            <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
          </div>
          <button className='skewBtn purple' onClick={props.history.goBack}>
            Return
          </button>
          <div className='social_share'>
            <SocialShare
              url={window.location.href}
              title={blog.title.rendered}
            />
          </div>
        </section>
      </div>
      {/* Article section end */}
      <div className='container_featured'>
        <HeadingButton text='You May Like' />
        {/* Featured Posts here! */}
        <section className='_cards'>
          <SingleBlogTrending history={historyId} />
        </section>
      </div>
    </div>
  );
};

export default withRouter(SingleTrendCard);
