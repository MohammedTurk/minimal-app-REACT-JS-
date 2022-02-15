import React from "react";
import { Grid, Stack } from "@mui/material";
import BlogNews from "../../userNews/BlogNews";
import UserAbout from "../../userNews/UserAbout";
import MediaCard from "./MediaCard";
import NewsHeader from "./NewsHeader";

function News(props) {
  return (
    <div>
      <NewsHeader />

      {/* News Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <BlogNews />
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={3}>
            <UserAbout />
            <MediaCard />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default News;
