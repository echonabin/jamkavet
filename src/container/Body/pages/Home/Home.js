import React from "react";
import { Grid } from "@material-ui/core";

import VideoCard from "../Videos/VideoCard";
import HomeLayout from "./HomeLayout";
import HeadingButton from "../../../../components/Buttons/HeadingButton";

const Home = () => {
  return (
    <HomeLayout>
      <HeadingButton text='videos' />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4} md={3}>
          <VideoCard
            src={require("../../../../static/Backgrounds/naturedawn.jpg")}
            title='Card'
          />
          <VideoCard
            src={require("../../../../static/Backgrounds/naturedawn.jpg")}
            title='Card'
          />
        </Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Home;
