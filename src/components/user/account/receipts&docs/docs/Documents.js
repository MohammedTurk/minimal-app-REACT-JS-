import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// utils
import mockData from "../../../../../utils/mock-data";
import DocItem from "../../../DocItem";

// ----------------------------------------------------------------------

const MOCK_BOOKINGS = [...Array(4)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  avatar: mockData.image.avatar(index),
  bookdAt: mockData.time(index),
  roomNumber: "A-21",
  roomType: (index === 1 && "double") || (index === 3 && "king") || "single",
  person: "3-5",
  cover: `/static/rooms/room-${index + 1}.jpg`,
}));

// ----------------------------------------------------------------------

export default function Documents() {
  return (
    <Box sx={{ my: 5 }}>
      <Box px={3} pb={2}>
        <Typography variant="h5">Documents</Typography>
      </Box>
      <Grid container rowSpacing={4}>
        {MOCK_BOOKINGS.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <DocItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
