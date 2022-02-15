import PropTypes from "prop-types";
import PinDropIcon from "@mui/icons-material/PinDrop";
import DoneIcon from "@mui/icons-material/Done";
// material
import { Box, Grid, Card, Button, Avatar, Typography } from "@mui/material";

// ----------------------------------------------------------------------

FollowerCard.propTypes = {
  follower: PropTypes.object,
  onToggle: PropTypes.func,
};

function FollowerCard({ follower, onToggle }) {
  const { name, country, avatarUrl, isFollowed } = follower;

  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 3 }}>
      <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48 }} />
      <Box sx={{ flexGrow: 1, minWidth: 0, pl: 2, pr: 1 }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 0.3 }}>
          <Box sx={{ mr: 1, flexShrink: 0 }}>
            <PinDropIcon sx={{ fontSize: "15px" }} />
          </Box>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {country}
          </Typography>
        </Box>
      </Box>
      <Button
        size="small"
        onClick={onToggle}
        variant={isFollowed ? "text" : "outlined"}
        color={isFollowed ? "primary" : "inherit"}
        startIcon={isFollowed && <DoneIcon />}
      >
        {isFollowed ? "Followed" : "Follow"}
      </Button>
    </Card>
  );
}

Followers.propTypes = {
  followers: PropTypes.array.isRequired,
  onToggleFollow: PropTypes.func,
};

export default function Followers({ followers, onToggleFollow, title }) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {title}
      </Typography>

      <Grid container spacing={3}>
        {followers.map((follower) => (
          <Grid key={follower.id} item xs={12} md={4}>
            <FollowerCard
              follower={follower}
              onToggle={() => onToggleFollow(follower.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
