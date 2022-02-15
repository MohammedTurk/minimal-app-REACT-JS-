import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";

function CardChannel(props) {
  return (
    <Card>
      <Box
        p={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src="/static/startChannel.jpg"
          alt="svgChannel"
          style={{ width: "80%", height: "80%" }}
        />

        <Typography variant="h6" textAlign="center" sx={{ marginTop: "15px" }}>
          Setup Discussion Channel
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginTop: "10px" }}
        >
          Need help,
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", margin: "3px 0 15px 0" }}
        >
          Please check out docs.
        </Typography>
        <Button
          variant="contained"
          sx={{ boxShadow: "0px 4px 50px rgba(0, 171, 85, 0.28)" }}
        >
          Start Channel
        </Button>
      </Box>
    </Card>
  );
}

export default CardChannel;
