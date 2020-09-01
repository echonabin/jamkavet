import React from "react";
import blogContext from "./blogContext";
import { useState } from "react";
const BlogState = (props) => {
  const [blog, setBlog] = useState([
    {
      name: "nabin",
      age: 19,
    },
  ]);
  return (
    <blogContext.Provider value={{ ...blog }}>
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
