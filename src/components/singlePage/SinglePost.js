import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "./SinglePost.scss";
import SinglePageContext from "../../context/singlepage/SinglePageContext";
import SocialShare from "../SocialShare/SocialShare";
import SingleBlogTrending from "../trending/SingleBlogTredCard/SingleBlogTrending";
import HeadingButton from "../Buttons/HeadingButton";
import ModalImage from "react-modal-image";
import Loading from "../Loading/Loading";
import HelmetMetaData from "../Helmet/HelmetMetaData";

const SinglePost = (props) => {
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [authoricon, setAuthoricon] = useState("");
  const { getBlog } = useContext(SinglePageContext);
  const [blogId] = useState(props.match.params.blogId);
  const [historyId] = useState(props);
  const blog = getBlog(blogId);
  if (!blog) {
    return <Loading />;
  }
  const imageItem = axios.get(
    `https://api.jamkabhet.com/wp-json/wp/v2/media/${blog.featured_media}`
  );
  const authorName = axios.get(
    `https://api.jamkabhet.com/wp-json/wp/v2/users/${blog.author}`
  );
  Promise.all([imageItem, authorName]).then((res) => {
    setAuthor(res[1].data.name);
    setThumbnail(res[0].data.media_details.sizes.full.source_url);
    setAuthoricon(res[1].data.avatar_urls[96]);
  });
  return (
    <>
      <HelmetMetaData
        title={blog.title.rendered}
        description={blog.title.rendered + author}
        image={thumbnail}></HelmetMetaData>
      <div className='container'>
        {/* Article section */}
        <div className='__article'>
          <div className='__article_heading'>
            <div className='title'>
              <h3>{blog.title.rendered}</h3>
            </div>
            <div className='__article_date'>
              <h4>{blog.date.slice(0, 10)} मा प्रकाशित</h4>
              <div className='social_share'>
                <SocialShare
                  url={window.location.href}
                  title={blog.title.rendered}
                  description={blog.title.rendered + " " + author}
                  image={thumbnail}
                />
              </div>
            </div>
          </div>
          <section className='_post'>
            <div className='_item-zoom'>
              <ModalImage
                style={{ width: "25rem" }}
                small={thumbnail}
                large={thumbnail}
                alt={blog.title.rendered}
              />
            </div>
            <div className='_content'>
              <div
                dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
              />
            </div>
            <button className='skewBtn purple' onClick={props.history.goBack}>
              Return
            </button>
            <div className='item'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://facebook.com/jamkaabhet'
                className='author'>
                <img src={authoricon} alt='icon' />
                <span className='name'>{author}</span>
              </a>
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
    </>
  );
};

export default withRouter(SinglePost);
