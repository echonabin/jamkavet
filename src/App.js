import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./container/Body/pages/Home/Home";
import Videos from "./container/Body/pages/Videos/Videos";
import Blogs from "./container/Body/pages/Blogs/Blogs";
import ErrorPage from "./container/Error/ErrorPage";
import BlogState from "./context/blogs/BlogState";
import VideoState from "./context/videos/VideoState";
import SingleBlog from "./container/Body/pages/Blogs/ SingleBlog";
const App = () => {
  return (
    <>
      <BlogState>
        <VideoState>
          <BrowserRouter>
            <CssBaseline />
            <Layout>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/videos' exact component={Videos} />
                <Route exact path='/blogs' component={Blogs} />
                <Route exact path='/blogs/:blogId' component={SingleBlog} />
                <Route component={ErrorPage} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </VideoState>
      </BlogState>
    </>
  );
};

export default App;
