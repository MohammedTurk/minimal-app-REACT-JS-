import React from "react";
import { Card, Box, Grid, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardBlog = styled(Card)({
  padding: "0 20px 20px 20px",
});
const Img = styled("img")({
  width: "100px",
  height: "100%",
  objectFit: "cover",
});
const GridBox = styled(Grid)({
  padding: "0px",
  borderRadius: "5px",
  overflow: "hidden",
  display: "flex",

  marginTop: "0 !important",
  justifyContent: "space-between",
  "& div:nth-of-type(1)": {
    paddingTop: "0px",
  },
  "& div:nth-of-type(2)": {
    paddingTop: "0px",
  },
  "& div:nth-of-type(3)": {
    paddingTop: "0px",
  },
});

function MediaCard(props) {
  return (
    <CardBlog>
      {/* Recent media Header*/}
      <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
        Recent media
      </Typography>
      <GridBox container mb={2} rowSpacing={{ xs: 1.5 }}>
        {Array.from(Array(6).keys()).map((item) => {
          return (
            <Grid item xs={4} key={item}>
              <Img src="/static/cover/cover_4.jpg" />
            </Grid>
          );
        })}
      </GridBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="outlined" color="inherit">
          See all
        </Button>
      </Box>
    </CardBlog>
  );
}

export default MediaCard;
