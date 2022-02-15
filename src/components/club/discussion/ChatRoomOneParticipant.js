import PropTypes from "prop-types";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Avatar,
  Button,
  Divider,
  Collapse,
  Typography,
  Stack,
} from "@mui/material";

// ----------------------------------------------------------------------

const CollapseButtonStyle = styled(Button)(({ theme }) => ({
  ...theme.typography.overline,
  height: 40,
  borderRadius: 0,
  padding: theme.spacing(1, 2),
  justifyContent: "space-between",
  color: theme.palette.text.disabled,
}));

const RowIconStyle = styled("span")(({ theme }) => ({
  width: 16,
  height: 16,
  marginTop: 4,
  color: theme.palette.text.secondary,
}));

const RowTextStyle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  maxWidth: 160,
  wordWrap: "break-word",
  ...theme.typography.body2,
}));

// ----------------------------------------------------------------------

ChatRoomOneParticipant.propTypes = {
  participants: PropTypes.array.isRequired,
  isCollapse: PropTypes.bool,
  onCollapse: PropTypes.func,
};

export default function ChatRoomOneParticipant({
  participants,
  isCollapse,
  onCollapse,
  ...other
}) {
  const participant = [...participants][0];

  if (participant === undefined) {
    return null;
  }

  return (
    <Box {...other}>
      <Box
        sx={{
          pt: 4,
          pb: 3,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt={participant.name}
          src={participant.avatar}
          sx={{ width: 96, height: 96 }}
        />
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="subtitle1">{participant.name}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {participant.position}
          </Typography>
        </Box>
      </Box>

      <Divider />

      <CollapseButtonStyle
        fullWidth
        color="inherit"
        onClick={onCollapse}
        endIcon={isCollapse ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
      >
        information
      </CollapseButtonStyle>

      <Collapse in={isCollapse}>
        <Stack spacing={2} sx={{ p: 2.5, pt: 1 }}>
          <Stack direction="row" spacing={1}>
            <RowIconStyle>
              <InsertDriveFileIcon />
            </RowIconStyle>
            <RowTextStyle>{participant.address}</RowTextStyle>
          </Stack>
          <Stack direction="row" spacing={1}>
            <RowIconStyle>
              <LocalPhoneIcon />
            </RowIconStyle>
            <RowTextStyle>{participant.phone}</RowTextStyle>
          </Stack>
          <Stack direction="row" spacing={1}>
            <RowIconStyle>
              <EmailIcon />
            </RowIconStyle>
            <RowTextStyle>{participant.email}</RowTextStyle>
          </Stack>
        </Stack>
      </Collapse>
    </Box>
  );
}
