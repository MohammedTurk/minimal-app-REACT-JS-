import React from "react";
import { Container, Grid, Stack, Box } from "@mui/material";
import CardStatistics from "./CardStatistics";
import Widgets from "./Widgets";
import RecentTransitions from "./RecentTransitions";
import Tasks from "./Tasks";
import NewsUpdate from "./NewsUpdate";
import CardChannel from "./CardChannel";
import StatisticsChart from "./StatisticsChart";
import AnaluticsEventTimeLine from "../AnaluticsEventTimeLine";
import { styled } from "@mui/material/styles";

const BoxItem = styled(Box)(({ theme }) => ({
  marginTop: "85px",
}));
function EventStatistics(props) {
  return (
    <Container>
      <BoxItem>
        <CardStatistics />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Widgets />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Widgets />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Widgets />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <RecentTransitions />
              <Tasks />
              <NewsUpdate />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <CardChannel />
              <StatisticsChart />
              <AnaluticsEventTimeLine />
            </Stack>
          </Grid>
        </Grid>
      </BoxItem>
    </Container>
  );
}

export default EventStatistics;
