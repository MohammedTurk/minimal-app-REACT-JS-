import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import BlogNews from "../../../userNews/BlogNews";
import UserAbout from "../../../userNews/UserAbout";
import UserStatistics from "./UserStatistics";
function ProfileTab(props) {
  return (
    <div>
      {/*  Header*/}
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        News
      </Typography>
      {/*  Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <BlogNews />
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={3}>
            <UserAbout />
            <UserStatistics />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileTab;
