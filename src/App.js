import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./container/Body/pages/Home/Home";
import Videos from "./container/Body/pages/Videos/Videos";
import Blogs from "./container/Body/pages/Blogs/Blogs";
import ErrorPage from "./container/Error/ErrorPage";
import BlogState from "./context/blogs/blogState";
const App = () => {
  return (
    <>
      <BlogState>
        <BrowserRouter>
          <CssBaseline />
          <Layout>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/videos' exact component={Videos} />
              <Route path='/blogs' component={Blogs} />
              <Route path='/:blogId' exact component={Blogs} />
              <Route component={ErrorPage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </BlogState>
    </>
  );
};

export default App;
