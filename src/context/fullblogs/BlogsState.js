import React from "react";
import axios from "axios";
import BlogsContext from "./BlogsContext";
import { useEffect, useReducer } from "react";
import reducer from "../reducer";
import { HANDEL_SET_BLOGS } from "../types";

const PeopleState = (props) => {
  const initialstate = {
    blogs: [],
    isLoading: true,
    categories: [],
  };

  useEffect(() => {
    axios.get("http://localhost:8000/wp-json/wp/v2/blog").then((res) => {
      dispatch({
        type: HANDEL_SET_BLOGS,
        payload: res,
      });
    });
  }, []);
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <BlogsContext.Provider value={{ state }}>
      {props.children}
    </BlogsContext.Provider>
  );
};

export default PeopleState;
