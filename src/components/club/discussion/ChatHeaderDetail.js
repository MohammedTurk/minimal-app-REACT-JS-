import PropTypes from "prop-types";
import { capitalCase } from "change-case";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhoneIcon from "@mui/icons-material/Phone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Avatar,
  Typography,
  AvatarGroup,
  IconButton,
  Button,
} from "@mui/material";
// utils
import { fToNow } from "../../../utils/formatTime";
//
import BadgeStatus from "../../BadgeStatus";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  flexShrink: 0,
  minHeight: 92,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 3),
}));

// ----------------------------------------------------------------------

OneAvatar.propTypes = {
  participants: PropTypes.array,
};

function OneAvatar({ participants }) {
  const participant = [...participants][0];

  if (participant === undefined) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ position: "relative" }}>
        <Avatar src={participant.avatar} alt={participant.name} />
        <BadgeStatus
          status={participant.status}
          sx={{ position: "absolute", right: 2, bottom: 2 }}
        />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{participant.name}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {participant.status !== "offline"
            ? capitalCase(participant.status)
            : fToNow(participant.lastActivity)}
        </Typography>
      </Box>
    </Box>
  );
}

GroupAvatar.propTypes = {
  participants: PropTypes.array,
};

function GroupAvatar({ participants }) {
  return (
    <div>
      <AvatarGroup
        max={3}
        sx={{
          mb: 0.5,
          "& .MuiAvatar-root": { width: 32, height: 32 },
        }}
      >
        {participants.map((participant) => (
          <Avatar
            key={participant.id}
            alt={participant.name}
            src={participant.avatar}
          />
        ))}
      </AvatarGroup>
      <Link
        variant="body2"
        underline="none"
        component={Button}
        color="text.secondary"
        onClick={() => {}}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {participants.length} persons
          <ArrowBackIosIcon />
        </Box>
      </Link>
    </div>
  );
}

ChatHeaderDetail.propTypes = {
  participants: PropTypes.array,
};

export default function ChatHeaderDetail({ participants, ...other }) {
  const isGroup = participants.length > 1;

  return (
    <RootStyle {...other}>
      {isGroup ? (
        <GroupAvatar participants={participants} />
      ) : (
        <OneAvatar participants={participants} />
      )}

      <Box sx={{ flexGrow: 1 }} />
      <IconButton>
        <PhoneIcon />
      </IconButton>
      <IconButton>
        <VideocamIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </RootStyle>
  );
}
