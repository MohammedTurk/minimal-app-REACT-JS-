import React from "react";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import EventsHeader from "./EventsHeader";

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  transition: theme.transitions.create("box-shadow", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": { boxShadow: theme.customShadows.z8 },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
  "& svg": {
    color: "#919eab",
  },
}));
export const IconStyleSm = styled("span")(({ theme }) => ({
  width: " 7px",
  height: "17px",
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
  "& svg": {
    width: "15px",
    height: "15px",
  },
}));
const CardMediaStyle = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 5.5)",
  "&:after": {
    top: 0,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,.5)",
  },
});
const CoverImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});
const TitleStyle = styled(RouterLink)(({ theme }) => ({
  ...theme.typography.subtitle2,
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },

  [theme.breakpoints.down("md")]: {
    height: 90,
    fontSize: "26px",
  },
  [theme.breakpoints.down("sm")]: {
    height: 60,
    fontSize: "16px",
  },
}));
const InfoStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
}));

const dummyData = [
  {
    id: 1,
    date: "SAT, OCT 30 @ 4:00 PM IST",
    work: "Carrier & Business",
    location: "Startups & Entrepreneurs - Open house networking",
    para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
    avatarFollowers: [1, 2, 3, 4, 5],
    share: 20,
    exp: 46,
  },
  {
    id: 2,
    date: "SAT, OCT 30 @ 4:00 PM IST",
    work: "Carrier & Business",
    location: "Startups & Entrepreneurs - Open house networking",
    para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
    avatarFollowers: [1, 2, 3, 4, 5],
    share: 20,
    exp: 46,
  },
  {
    id: 3,
    date: "SAT, OCT 30 @ 4:00 PM IST",
    work: "Carrier & Business",
    location: "Startups & Entrepreneurs - Open house networking",
    para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
    avatarFollowers: [1, 2, 3, 4, 5],
    share: 20,
    exp: 46,
  },
  {
    id: 4,
    date: "SAT, OCT 30 @ 4:00 PM IST",
    work: "Carrier & Business",
    location: "Startups & Entrepreneurs - Open house networking",
    para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
    avatarFollowers: [1, 2, 3, 4, 5],
    share: 20,
    exp: 46,
  },
  {
    id: 5,
    date: "SAT, OCT 30 @ 4:00 PM IST",
    work: "Carrier & Business",
    location: "Startups & Entrepreneurs - Open house networking",
    para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
    avatarFollowers: [1, 2, 3, 4, 5],
    share: 20,
    exp: 46,
  },
  {
    id: 6,
    date: "SAT, OCT 30 @ 4:00 PM IST",
    work: "Carrier & Business",
    location: "Startups & Entrepreneurs - Open house networking",
    para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
    avatarFollowers: [1, 2, 3, 4, 5],
    share: 20,
    exp: 46,
  },
];

function Events(props) {
  const UpcommingEvents = dummyData.slice(0, 3);
  const PastEvents = dummyData.slice(0, 5);

  const POST_INFO = [
    { number: 55, icon: <MessageIcon /> },
    { number: 26, icon: <RemoveRedEyeIcon /> },
    { number: 20, icon: <ShareIcon /> },
  ];

  return (
    <Box>
      {/* Event header */}
      <EventsHeader />
      <Box mb={4}>
        <FormControl size="small">
          <SearchStyle
            placeholder="Search events by name..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      {/* Upcomming  Events */}
      <Grid container spacing={4}>
        {UpcommingEvents.map((event) => (
          <Grid item xs={12} md={6} key={event.id}>
            <Card sx={{ position: "relative", borderRadius: "16px" }}>
              <CardMediaStyle>
                <CoverImgStyle alt="cover" src="/static/cover/Cover.jpg" />
              </CardMediaStyle>

              <CardContent
                sx={{
                  pt: 4,
                  bottom: 0,
                  width: "100%",
                  position: "absolute",
                }}
              >
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ color: "#ffffffc4", display: "block" }}
                >
                  {event.date}
                </Typography>

                <TitleStyle
                  to="#"
                  sx={{
                    typography: "h6",
                  }}
                >
                  {event.location}
                </TitleStyle>

                <InfoStyle>
                  {POST_INFO.map((info, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mr: 1.5,
                        color: "#fff",
                      }}
                    >
                      <IconStyleSm>{info.icon}</IconStyleSm>
                      <Typography variant="caption">{info.number}</Typography>
                    </Box>
                  ))}
                </InfoStyle>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Past Events */}
      <Box mt={5}>
        {/*  Past Events*/}
        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
          Past Events
        </Typography>
        <Grid container spacing={4}>
          {PastEvents.map((event) => (
            <Grid item xs={12} md={6} key={event.id}>
              <Card sx={{ position: "relative", borderRadius: "16px" }}>
                <CardMediaStyle>
                  <CoverImgStyle alt="cover" src="/static/cover/Cover.jpg" />
                </CardMediaStyle>

                <CardContent
                  sx={{
                    pt: 4,
                    bottom: 0,
                    width: "100%",
                    position: "absolute",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="caption"
                    sx={{ color: "#ffffffc4", display: "block" }}
                  >
                    {event.date}
                  </Typography>

                  <TitleStyle
                    to="#"
                    sx={{
                      typography: "h6",
                      color: "common.white",
                    }}
                  >
                    {event.location}
                  </TitleStyle>

                  <InfoStyle>
                    {POST_INFO.map((info, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mr: 1.5,
                          color: "#fff",
                        }}
                      >
                        <IconStyleSm>{info.icon}</IconStyleSm>
                        <Typography variant="caption">{info.number}</Typography>
                      </Box>
                    ))}
                  </InfoStyle>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Events;
