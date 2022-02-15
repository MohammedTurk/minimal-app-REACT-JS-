import React, { useState } from "react";
import { filter } from "lodash";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Card,
  Link,
  Avatar,
  Button,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
//
import SearchNotFound from "../../../SearchNotFound";

// ----------------------------------------------------------------------

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 340,
  marginBottom: theme.spacing(5),
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": {
    width: 320,
    boxShadow: theme.customShadows.z8,
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

// ----------------------------------------------------------------------

function applyFilter(array, query) {
  let arr = array;
  if (query) {
    arr = filter(
      array,
      (_club) => _club.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return arr;
}
FollowersCard.propTypes = {
  friend: PropTypes.object,
  handleToggleFollow: PropTypes.func,
};

function FollowersCard({ follower, handleToggleFollow }) {
  const { name, country, avatarUrl, isFollowed } = follower;

  return (
    <Card
      sx={{
        py: 5,
        display: "flex",
        position: "relative",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        alt={name}
        src={avatarUrl}
        sx={{ width: 64, height: 64, mb: 3 }}
      />
      <Link
        to="#"
        variant="subtitle1"
        color="text.primary"
        component={RouterLink}
      >
        {name}
      </Link>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {country}
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Button
          variant={isFollowed ? "outlined" : "contained"}
          color={isFollowed ? "inherit" : "primary"}
          onClick={handleToggleFollow}
          startIcon={
            !isFollowed && (
              <ThumbUpIcon sx={{ width: "18px", height: "18px" }} />
            )
          }
        >
          {isFollowed ? "Followed" : "Follow"}
        </Button>
      </Box>
      <IconButton
        sx={{
          top: 8,
          right: 8,
          position: "absolute",
        }}
      >
        <MoreVertIcon />
      </IconButton>
    </Card>
  );
}

ClubItems.propTypes = {
  followers: PropTypes.array,
  handleToggleFollow: PropTypes.func,
  title: PropTypes.string,
};
export default function ClubItems({ followers, handleToggleFollow, title }) {
  const [findFollowers, setfindFollowers] = useState("");
  const clubsFiltered = applyFilter(followers, findFollowers);
  const isNotFound = clubsFiltered.length === 0;

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {title}
      </Typography>

      <SearchStyle
        value={findFollowers}
        onChange={(e) => setfindFollowers(e.target.value)}
        placeholder="Search clubs by name..."
        startAdornment={
          <InputAdornment position="start">
            <Box sx={{ color: "text.disabled" }}>
              <SearchIcon />
            </Box>
          </InputAdornment>
        }
      />

      <Grid container spacing={3}>
        {clubsFiltered.map((follower) => (
          <Grid key={follower.id} item xs={12} md={4}>
            <FollowersCard
              follower={follower}
              handleToggleFollow={() => handleToggleFollow(follower.id)}
            />
          </Grid>
        ))}
      </Grid>
      {isNotFound && (
        <Box sx={{ mt: 5 }}>
          <SearchNotFound searchQuery={findFollowers} />
        </Box>
      )}
    </Box>
  );
}
