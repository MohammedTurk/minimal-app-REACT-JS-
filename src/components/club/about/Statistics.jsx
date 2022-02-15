import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  mutedColor: {
    color: "rgb(0 0 0 / 60%)",
  },
});

const GridDetails = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    textAlign: "start",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "start",
    fontSize: "18px !important",
  },

  [theme.breakpoints.down("xs")]: {
    fontSize: "12px !important",
    textAlign: "start",
  },
}));
const GridMain = styled(Grid)(({ theme }) => ({
  boxShadow: theme.customShadows.z20,
  borderRadius: theme.shape.borderRadiusMd,
  padding: "20px",
}));

function Statistics(props) {
  const Classes = useStyle();
  return (
    <Box>
      <GridMain container my={3} sx={{}}>
        <Grid item xs={5} sm={3} lg={6}>
          <Button variant="contained">Follow</Button>
        </Grid>
        <GridDetails container item xs={7} sm={9} lg={6} columnSpacing={0.5}>
          <Grid item xs={12} sm={8} md={4} my={0.5}>
            <Box>
              21 <span className={Classes.mutedColor}>Common in the both</span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} my={0.5}>
            <Box>
              48 <span className={Classes.mutedColor}>Clubs</span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} my={0.5}>
            <Box>
              30 <span className={Classes.mutedColor}> Events</span>
            </Box>
          </Grid>
        </GridDetails>
      </GridMain>
    </Box>
  );
}

export default Statistics;
