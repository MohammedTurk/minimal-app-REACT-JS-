import React from "react";
import { Container, Box, Grid, Stack, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import BlogPost from "../blog/BlogPost";
import CardEvent from "./CardEvent";
import BoxEvent from "./BoxEvent";
import AnaluticsEventTimeLine from "./AnaluticsEventTimeLine";
import Socialevent from "./SocialEvent";
import { styled } from "@mui/material/styles";

const BoxItem = styled(Box)(({ theme }) => ({
  marginTop: "85px",
}));
function Event(props) {
  const { id } = useParams();
  return (
    <Container>
      <BoxItem>
        <CardEvent />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box
              display={{ xs: "block", md: "none" }}
              sx={{ width: "50%" }}
              mb={2}
            >
              <Button
                variant="contained"
                size="medium"
                component={Link}
                to={`/events/event_${id}/statistics`}
              >
                Show Statistics
              </Button>
            </Box>
            <BlogPost />
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2} direction="column">
              <Box display={{ xs: "none", md: "block" }} sx={{ width: "50%" }}>
                <Button
                  variant="contained"
                  size="medium"
                  component={Link}
                  to={`/events/event_${id}/statistics`}
                >
                  Show Statistics
                </Button>
              </Box>

              <BoxEvent />
              <AnaluticsEventTimeLine />
              <Socialevent />
            </Stack>
          </Grid>
        </Grid>
      </BoxItem>
    </Container>
  );
}

export default Event;
