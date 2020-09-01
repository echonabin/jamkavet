import React from "react";
import blogContext from "./context/blogs/blogContext";
import BlogState from "./context/blogs/blogState";
const Test = () => {
  return (
    <BlogState>
      <blogContext.Consumer>
        {(context) => {
          console.log(context);
          const { name, age } = context[0];
          const { handelChange } = context;
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}>
              <h1>{name}</h1>
              <p>{age}</p>
              <button onClick={handelChange}>Change Name</button>
            </div>
          );
        }}
      </blogContext.Consumer>
    </BlogState>
  );
};

export default Test;
