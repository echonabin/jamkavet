import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./container/Body/pages/Home/Home";
import Videos from "./container/Body/pages/Videos/Videos";
import ErrorPage from "./container/Error/ErrorPage";
import BlogState from "./context/blogs/BlogState";
import VideoState from "./context/videos/VideoState";
// import SingleBlog from "./container/Body/pages/Blogs/ SingleBlog";
import HistoryPg from "./container/Body/pages/Blogs/History/HistoryPg";
import People from "./container/Body/pages/Blogs/People/People";
import Place from "./container/Body/pages/Blogs/Place/Place";
import Brand from "./container/Body/pages/Blogs/Brand/Brand";
import Fiction from "./container/Body/pages/Blogs/Fiction/Fiction";
import BlogsState from "./context/fullblogs/BlogsState";
import SinglePost from "./components/singlePage/SinglePost";
import SinglePageState from "./context/singlepage/SinglePageState";

const App = () => {
  return (
    <>
      <BlogState>
        <BlogsState>
          <SinglePageState>
            <VideoState>
              <BrowserRouter>
                <CssBaseline />
                <Layout>
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route exact path='/people' component={People} />
                    <Route exact path='/place' component={Place} />
                    <Route exact path='/brand' component={Brand} />
                    <Route exact path='/history' component={HistoryPg} />
                    <Route exact path='/fiction' component={Fiction} />
                    <Route path='/videos' exact component={Videos} />
                    <Route exact path='/:blogId' component={SinglePost} />

                    <Route component={ErrorPage} />
                  </Switch>
                </Layout>
              </BrowserRouter>
            </VideoState>
          </SinglePageState>
        </BlogsState>
      </BlogState>
    </>
  );
};

export default App;
