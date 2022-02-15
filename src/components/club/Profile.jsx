import React, { lazy } from "react";
import ImageIcon from "@mui/icons-material/Image";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import GroupIcon from "@mui/icons-material/Group";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FeedIcon from "@mui/icons-material/Feed";
import ProfileHeader from "../ProfileHeader";
import { styled } from "@mui/material/styles";
const About = lazy(() => import("./about/About"));
const Chat = lazy(() => import("./discussion/Chat"));
const Events = lazy(() => import("./events/Events"));
const News = lazy(() => import("./news/News"));
const Media = lazy(() => import("./media/Media"));
const Members = lazy(() => import("./members/Members"));
const SpanIcon = styled("span")({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: "6px",
  },
});
const PROFILE_TABS = [
  {
    value: "About",
    icon: (
      <SpanIcon>
        <InfoIcon />
      </SpanIcon>
    ),
    component: <About />,
  },
  {
    value: "Events",
    icon: (
      <SpanIcon>
        <EventAvailableIcon />
      </SpanIcon>
    ),
    component: <Events />,
  },
  {
    value: "News",
    icon: (
      <SpanIcon>
        <FeedIcon />
      </SpanIcon>
    ),
    component: <News />,
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
    value: "Discussion",
    icon: (
      <SpanIcon>
        <QuestionAnswerIcon />
      </SpanIcon>
    ),
    component: <Chat />,
  },
  {
    value: "Members",
    icon: (
      <SpanIcon>
        <GroupIcon />
      </SpanIcon>
    ),
    component: <Members />,
  },
  {
    value: "More",
    icon: (
      <SpanIcon>
        <MoreHorizIcon />
      </SpanIcon>
    ),
    component: <></>,
  },
];

function Profile(props) {
  return <ProfileHeader data={PROFILE_TABS} />;
}

export default Profile;
