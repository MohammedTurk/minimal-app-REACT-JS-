import React from "react";
import PropTypes from "prop-types";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";

// material
import { Box, Stack, Avatar, Typography, Paper } from "@mui/material";
import { fDateTime } from "../../utils/formatTime";
import Label from "../Label";

DocItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    bookdAt: PropTypes.instanceOf(Date),
    cover: PropTypes.string,
    name: PropTypes.string,
    person: PropTypes.string,
    roomNumber: PropTypes.string,
    roomType: PropTypes.string,
  }),
};
function DocItem({ item }) {
  const { avatar, name, roomNumber, bookdAt, person, cover, roomType } = item;

  return (
    <Paper sx={{ mx: 1.5, borderRadius: 2, bgcolor: "background.neutral" }}>
      <Stack spacing={2.5} sx={{ p: 3, pb: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={name} src={avatar} />
          <div>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.disabled", mt: 0.5, display: "block" }}
            >
              {fDateTime(bookdAt)}
            </Typography>
          </div>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
          sx={{ color: "text.secondary" }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <VpnKeyIcon style={{ width: "18px", height: "18px" }} />
            <Typography variant="caption">Room {roomNumber}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <PersonIcon style={{ width: "18px", height: "18px" }} />
            <Typography variant="caption">{person} Person</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ p: 1, position: "relative" }}>
        <Label
          variant="filled"
          color={
            (roomType === "king" && "error") ||
            (roomType === "double" && "info") ||
            "warning"
          }
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            textTransform: "capitalize",
          }}
        >
          {roomType}
        </Label>
        <Box component="img" src={cover} sx={{ borderRadius: 1.5, width: 1 }} />
      </Box>
    </Paper>
  );
}

export default DocItem;
