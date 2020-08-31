import React from "react";
import { Grid } from "@material-ui/core";

import VideoCard from "../Videos/VideoCard";
import HomeLayout from "./HomeLayout";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import FeaturedBlog from "../Blogs/Featured/FeaturedBlog";

const Home = () => {
  return (
    <HomeLayout>
      <HeadingButton text='Featured Blogs' />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4} md={3}>
          <FeaturedBlog />
        </Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Home;
