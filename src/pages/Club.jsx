import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Profile from "../components/club/Profile";
const BoxItem = styled(Box)(({ theme }) => ({
  marginTop: "80px",
}));
function Club(props) {
  return (
    <Container maxWidth="lg">
      {/* Header About */}
      <BoxItem>
        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
          Profile
        </Typography>
        <Profile />
      </BoxItem>
    </Container>
  );
}

export default Club;
