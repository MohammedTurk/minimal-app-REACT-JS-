import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Card, Avatar, Typography, Button } from "@mui/material";
const RootStyle = styled("div")(({ theme }) => ({
  "&:before": {
    top: 0,
    zIndex: 9,
    width: "100%",
    content: "''",
    height: "100%",
    position: "absolute",
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(1px)", // Fix on Mobile
    backgroundColor: "rgb(0 82 73 / 40%)",
  },
}));
const CoverImgStyle = styled("img")({
  zIndex: 8,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});
const InfoStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: "absolute",
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    right: "auto",
    display: "flex",
    alignItems: "center",
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));
const CardBox = styled(Card)(({ theme }) => ({
  marginBottom: "24px",
  height: 300,
  position: "relative",
  borderRadius: "16px",
  [theme.breakpoints.down("md")]: {
    height: "200px !important",
  },
}));

function CardEvent(props) {
  return (
    <CardBox>
      {/* Here is the button Edit Profile */}
      <Box sx={{ position: "absolute", right: "2%", top: "20px", zIndex: 10 }}>
        <Button variant="contained">
          <img
            src="/static/icons/minimal.svg"
            alt="icon-minimal"
            style={{ marginRight: "5px", width: "20px", height: "20px" }}
          />
          Get Ticket
        </Button>
      </Box>

      <RootStyle>
        <InfoStyle>
          <Avatar
            src="/static/avatar/avatar_24.jpg"
            alt="avatar"
            sx={{
              mx: "auto",
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "common.white",
              width: { xs: 80, md: 128 },
              height: { xs: 80, md: 128 },
            }}
          />
          <Box
            sx={{
              ml: { md: 3 },
              mt: { xs: 1, md: 0 },
              color: "common.white",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Here is the  Club name and date  */}
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              Carlota Monteiro
            </Typography>
            <Typography sx={{ opacity: 0.72 }}>
              Rajmachi, Old Mumbai Pune Highway, Maharasttra
            </Typography>
          </Box>
        </InfoStyle>
        {/* Here is the  Club Cover  */}
        <CoverImgStyle src="/static/cover/Cover.jpg" alt="" />
      </RootStyle>
    </CardBox>
  );
}

export default CardEvent;
