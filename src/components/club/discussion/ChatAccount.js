import { useState, useRef } from "react";
import { capitalCase } from "change-case";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
// material
import {
  Box,
  List,
  Select,
  Divider,
  Popover,
  Tooltip,
  ListItem,
  Typography,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Avatar,
} from "@mui/material";
// hooks
//
import BadgeStatus from "../../BadgeStatus";

// ----------------------------------------------------------------------

const STATUS = ["online", "invisible", "away"];

export default function ChatAccount() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("online");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Box ref={anchorRef} sx={{ position: "relative" }}>
        <Avatar
          src="/static/avatar/avatar_1.jpg"
          onClick={handleOpen}
          sx={{ cursor: "pointer", width: 48, height: 48 }}
        />
        <BadgeStatus
          status={status}
          sx={{ position: "absolute", bottom: 2, right: 2 }}
        />
      </Box>

      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Box
          sx={{ py: 2, pr: 1, pl: 2.5, display: "flex", alignItems: "center" }}
        >
          <Avatar src="/static/avatar/avatar_1.jpg" />

          <Box sx={{ ml: 2, mr: 3 }}>
            <Typography noWrap variant="subtitle1">
              Jaydon Frankie
            </Typography>
            <Typography noWrap variant="body2" sx={{ color: "text.secondary" }}>
              demo@minimals.cc
            </Typography>
          </Box>

          <Tooltip title="Log out">
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Divider />

        <List>
          <ListItem sx={{ px: 2.5 }}>
            <ListItemIcon>
              <BadgeStatus size="large" status={status} sx={{ m: 0.75 }} />
            </ListItemIcon>
            <ListItemText>
              <Select
                native
                value={status}
                onChange={handleChangeStatus}
                sx={{
                  "& svg": { display: `none` },
                  "& select": { p: 0, typography: "body2" },
                  "& fieldset": { display: "none" },
                }}
              >
                {STATUS.map((option) => (
                  <option key={option} value={option}>
                    {capitalCase(option)}
                  </option>
                ))}
              </Select>
            </ListItemText>
          </ListItem>

          <ListItemButton sx={{ px: 2.5 }}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{ variant: "body2" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ px: 2.5 }}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{ variant: "body2" }}
            />
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
}
