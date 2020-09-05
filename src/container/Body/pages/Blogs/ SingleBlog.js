import React from "react";
import { useState } from "react";
import { useContext } from "react";
import BlogContext from "../../../../context/blogs/BlogContext";

const SingleBlog = (props) => {
  console.log(props);
  const { getBlog } = useContext(BlogContext);
  const [blogId, setBlogId] = useState(props.match.params.blogId);
  const blog = getBlog(blogId);
  if (!blog) {
    return <h1>Loading..</h1>;
  }
  const { title, description, Images, YoutubeID, addedDate, created_by } = blog;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {Images.map((image) => {
        const hostUrl = "http://localhost:1337";
        return <img src={`${hostUrl}${image.formats.large.url}`} alt='Blog' />;
      })}
    </div>
  );
};

export default SingleBlog;
