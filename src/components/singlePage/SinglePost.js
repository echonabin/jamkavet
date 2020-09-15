import React from "react";

import "./SinglePost.scss";
import Blog from "../../container/Body/pages/Blogs/Blog";

const SinglePost = () => {
  return (
    <div className='container'>
      {/* Article section */}
      <div className='__article'>
        <div className='__article_heading'>
          <div className='title'>
            <h3>This will be article heading</h3>
          </div>
          <div className='__article_date'>
            <div className='item'>
              <h4>Sep 12, 2020 </h4>
              <a href='/' className='author'>
                <span class='name'>Admin</span>
                <img
                  src={require("../../static/Icons/mankakura.png")}
                  alt='icon'
                />
              </a>
            </div>
          </div>
        </div>
        <section className='_post'>
          <div className='_item-zoom'>
            <a href='/'>
              <img
                src={require("../../static/Backgrounds/naturedawn.jpg")}
                alt='post Img'
              />
            </a>
          </div>
          <div className='_content'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              dignissimos maiores eveniet repudiandae rerum aliquid illo vitae
              ea velit, ducimus dolores voluptas voluptatem fugiat unde iste
              porro consequuntur ex. Adipisci.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              architecto, maiores voluptas deserunt aperiam eveniet nisi
              repellat autem eos? Recusandae maiores facilis, nostrum expedita
              numquam illo repudiandae tempore similique illum.
            </p>
          </div>
        </section>
      </div>
      {/* Article section end */}
      <div className='container_featured'>
        <div className='__heading'>
          <div className='__heading_title'>
            <h3>Featured | Recents</h3>
            <p>Other liked these posts also.</p>
            <p>
              <a href='/'>#Recents</a>
            </p>
          </div>
        </div>
        {/* Featured Posts here! */}
        <section className='_cards'>
          <Blog />
        </section>
      </div>
    </div>
  );
};

export default SinglePost;
