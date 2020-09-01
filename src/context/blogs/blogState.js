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
  const handelChange = () => {
    setBlog({
      name: "nubie",
    });
  };
  return (
    <blogContext.Provider
      value={{
        ...blog,
        handelChange: handelChange,
      }}>
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
