import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Grid } from "@material-ui/core";
import "./SingleBlog.css";
import BlogContext from "../../../../context/blogs/BlogContext";

const SingleBlog = (props) => {
  const YoutubeApiKey = "AIzaSyAuR63mqhbH0EVd73070DpRASuODidLEiQ";
  const { getBlog } = useContext(BlogContext);
  const [blogId, setBlogId] = useState(props.match.params.blogId);
  const blog = getBlog(blogId);
  console.log(blog);
  if (!blog) {
    return <h1>Loading..</h1>;
  }
  const { title, description, Images, YoutubeID, addedDate, created_by } = blog;
  const BlogPost = () => {
    return (
      <div>
        <div className='container'>
          <div className='top-matter'>
            <div className='byline'>
              <h1>{title}</h1>
            </div>
          </div>
          <div className='main-article'>
            <section>
              <p>{description}</p>
              <hr />
              <br />
              <Grid container spacing={1}>
                {Images.map((image) => {
                  const hostUrl = "http://localhost:1337";
                  return (
                    <Grid item xs={12} md={6}>
                      <img
                        key={image.id}
                        src={`${hostUrl}${image.formats.large.url}`}
                        alt='Blog'
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <hr />
            </section>
          </div>
        </div>
      </div>
    );
  };
  if (!YoutubeID) {
    return <BlogPost />;
  } else {
    return (
      <>
        <BlogPost key={blog.id} />
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <iframe
            style={{
              width: "1080px",
              height: "512px",
              marginBottom: "20px",
            }}
            title={title}
            src={`https://www.youtube.com/embed?key:${YoutubeApiKey}${YoutubeID}`}
          />
        </section>
      </>
    );
  }
};

export default SingleBlog;
