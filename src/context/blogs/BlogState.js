import React, { useReducer } from "react";
import BlogContext from "./BlogContext";
import reducer from "../reducer";
const BlogState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlogContext.Provider value={[state, dispatch]}>
      {props.children}
    </BlogContext.Provider>
  );
};
export default BlogState;
