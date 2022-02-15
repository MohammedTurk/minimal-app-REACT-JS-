import React, { useState, Suspense } from "react";
import { styled } from "@mui/material/styles";

import {
  Box,
  Tab,
  Tabs,
  Card,
  Avatar,
  Typography,
  AvatarGroup,
  Button,
} from "@mui/material";

const TabsWrapperStyle = styled("div")(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: "100%",
  display: "flex",
  position: "absolute",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    paddingRight: theme.spacing(3),
  },
  "& svg": {
    width: "20px !important",
    height: "20px !important",
  },
}));
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

const FollowWrap = styled("div")(({ theme }) => ({
  position: "absolute",
  zIndex: 10,
  textAlign: "start",
  color: "#fff",
  display: "flex",
  margin: "5px auto",
  top: "58%",
  right: "2%",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    right: "0%",
    padding: "0 10px",
  },
  [theme.breakpoints.up("md")]: {
    width: 300,
  },
}));
function ProfileHeader({ data }) {
  const currentValue = data[0].value;
  const [currentTab, setCurrentTab] = useState(currentValue);
  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <Box sx={{ mb: 5 }}>
      <Card
        sx={{
          mb: 3,
          height: 320,
          position: "relative",
          borderRadius: 2,
        }}
      >
        {/* Here is the button Edit Profile */}
        <Box
          sx={{ position: "absolute", right: "2%", top: "20px", zIndex: 10 }}
        >
          <Button variant="contained">Edit Profile</Button>
        </Box>
        {/* Here is the Follower and Following  */}
        <FollowWrap>
          {["Follower", "Following"].map((item) => {
            return (
              <Box key={item}>
                <AvatarGroup
                  max={4}
                  sx={{
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                    },
                  }}
                >
                  {Array.from(Array(4).keys()).map((person) => (
                    <Avatar
                      key={person}
                      alt="avatar"
                      src="/static/avatar/avatar_5.jpg"
                    />
                  ))}
                </AvatarGroup>
                <Box sx={{ marginTop: "10px" }}>{item}</Box>
              </Box>
            );
          })}
        </FollowWrap>

        <RootStyle>
          <InfoStyle>
            <Avatar
              src="/static/cover/cover_4.jpg"
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
                Member since October 2021
              </Typography>
            </Box>
          </InfoStyle>
          {/* Here is the  Club Cover  */}
          <CoverImgStyle src="/static/cover/Cover.jpg" alt="" />
        </RootStyle>
        {/* Here is the  Tabs  */}
        <TabsWrapperStyle>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChangeTab}
          >
            {data.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {tab.icon}
                    {tab.value}
                  </Box>
                }
              />
            ))}
          </Tabs>
        </TabsWrapperStyle>
      </Card>
      {data.map((tab) => {
        const isMatched = tab.value === currentTab;
        return (
          isMatched && (
            <Box key={tab.value}>
              <Suspense fallback={<span>loading</span>}>
                {tab.component}
              </Suspense>
            </Box>
          )
        );
      })}
    </Box>
  );
}

export default ProfileHeader;
