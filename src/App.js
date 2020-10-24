import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./container/Body/pages/Home/Home";
import Videos from "./container/Body/pages/Videos/Videos";
import ErrorPage from "./container/Error/ErrorPage";
import VideoState from "./context/videos/VideoState";
// import SingleBlog from "./container/Body/pages/Blogs/ SingleBlog";
import People from "./container/Body/pages/Blogs/People/People";
import Place from "./container/Body/pages/Blogs/Place/Place";
import Brand from "./container/Body/pages/Blogs/Brand/Brand";
import BlogsState from "./context/fullblogs/BlogsState";
import SinglePost from "./components/singlePage/SinglePost";
import SinglePageState from "./context/singlepage/SinglePageState";
import SingleTrendCard from "./components/trending/SingleTrendCard";
import ScrollTop from "./components/Scroll/ScrollTop";
import Podcast from "./container/Body/pages/Podcast/Podcast";

const App = () => {
  return (
    <>
      <BlogsState>
        <SinglePageState>
          <VideoState>
            <BrowserRouter>
              <ScrollTop>
                <CssBaseline />
                <Layout>
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route exact path='/people' component={People} />
                    <Route exact path='/place' component={Place} />
                    <Route exact path='/brand' component={Brand} />
                    {/* Left to add podcast component */}
                    <Route exact path='/podcast' component={Podcast} />
                    <Route path='/videos' exact component={Videos} />
                    <Route exact path='/:blogId' component={SinglePost} />
                    <Route
                      path={`/trend/:blogId`}
                      component={SingleTrendCard}
                    />
                    <Route component={ErrorPage} />
                  </Switch>
                </Layout>
              </ScrollTop>
            </BrowserRouter>
          </VideoState>
        </SinglePageState>
      </BlogsState>
    </>
  );
};

export default App;
