import React, { lazy } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ProfileHeader from "../components/ProfileHeader";
import ImageIcon from "@mui/icons-material/Image";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { styled } from "@mui/material/styles";
import { Container, Typography, Box } from "@mui/material";
const ProfileTab = lazy(() =>
  import("../components/user/profile/profileTab/ProfileTab")
);
const Followers = lazy(() =>
  import("../components/user/profile/followersTab/Followers")
);
const Club = lazy(() => import("../components/user/profile/clubsTab/Club"));
const Media = lazy(() => import("../components/user/profile/mediaTab/Media"));
const Resources = lazy(() =>
  import("../components/user/profile/resourcesTab/Resources")
);

const SpanIcon = styled("span")({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: "6px",
  },
});
const PROFILE_TABS = [
  {
    value: "Profile",
    icon: (
      <SpanIcon>
        <AccountCircleIcon />
      </SpanIcon>
    ),
    component: <ProfileTab />,
  },
  {
    value: "Followers",
    icon: (
      <SpanIcon>
        <PeopleAltIcon />
      </SpanIcon>
    ),
    component: <Followers />,
  },
  {
    value: "Clubs",
    icon: (
      <SpanIcon>
        <NightlifeIcon />
      </SpanIcon>
    ),
    component: <Club />,
  },
  {
    value: "Media",
    icon: (
      <SpanIcon>
        <ImageIcon />
      </SpanIcon>
    ),
    component: <Media />,
  },
  {
    value: "Resources",
    icon: (
      <SpanIcon>
        <DirectionsCarIcon />
      </SpanIcon>
    ),
    component: <Resources />,
  },
];

const BoxItem = styled(Box)(({ theme }) => ({
  marginTop: "80px",
}));
function Profile(props) {
  return (
    <Container>
      <BoxItem>
        <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
          Profile
        </Typography>
        <ProfileHeader data={PROFILE_TABS} />
      </BoxItem>
    </Container>
  );
}

export default Profile;
