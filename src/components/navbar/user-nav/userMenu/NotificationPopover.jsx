import PropTypes from "prop-types";
import { noCase } from "change-case";
import { useRef, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// material
import { alpha } from "@mui/material/styles";
import {
  Box,
  List,
  Badge,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  ListItemText,
  Card,
  ListSubheader,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// utils
import mockData from "../../../../utils/mock-data";
import { fToNow } from "../../../../utils/formatTime";
// components
import Scrollbar from "../../../Scrollbar";
import MenuDialog from "../../../MenuDialog";
import { MFab, MIconButton } from "../../../@material-extend";

// ----------------------------------------------------------------------
const ImgItem = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const BoxNotification = styled(Card)(({ theme }) => ({
  padding: "10px",
  display: "flex",
  borderRadius: "6px",
  margin: "10px 0",

  border: `1px solid ${theme.palette.grey[200]}`,
  "& .css-p5ef3q-MuiListItemText-root": {
    marginLeft: "10px",
  },
}));

const TITLES = [
  "Your order is placed",
  "Sylvan King",
  "You have new message",
  "You have new mail",
  "Delivery processing",
];

const DESCRIPTIONS = [
  "waiting for shipping",
  "answered to your comment on the Minimal",
  "5 unread messages",
  "sent from Guido Padberg",
  "Your order is being shipped",
];

const TYPES = [
  "order_placed",
  "friend_interactive",
  "chat_message",
  "mail",
  "order_shipped",
];

const AVATARS = [null, mockData.image.avatar(2), null, null, null];

const UNREADS = [true, true, false, false, false];

const MOCK_NOTIFICATIONS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: TITLES[index],
  description: DESCRIPTIONS[index],
  avatar: AVATARS[index],
  type: TYPES[index],
  createdAt: mockData.time(index),
  isUnRead: UNREADS[index],
}));

// ----------------------------------------------------------------------

function renderContent(notification) {
  const title = (
    <Typography component="span" variant="body2" sx={{ color: "#333333" }}>
      {notification.title}
      &nbsp; {noCase(notification.description)}
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: (
        <ImgItem
          alt={notification.title}
          src="/static/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: (
        <ImgItem
          alt={notification.title}
          src="/static/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: (
        <ImgItem alt={notification.title} src="/static/avatar/avatar_2.jpg" />
      ),
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: (
        <ImgItem
          alt={notification.title}
          src="/static/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: <ImgItem alt={notification.title} src={notification.avatar} />,
    title,
  };
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

function NotificationItem({
  notification,
  removeNotification,
  turnNotificationToRead,
}) {
  const { avatar, title } = renderContent(notification);

  return (
    <BoxNotification display="flex">
      <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
      <ListItemText
        primary={title}
        secondary={
          <Box display="flex">
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                display: "flex",
                alignItems: "center",
                color: "text.disabled",
              }}
            >
              {fToNow(notification.createdAt)}
            </Typography>
          </Box>
        }
      />
      <Box display="flex" alignItems="center">
        {notification.isUnRead ? (
          <>
            <MFab
              onClick={() => turnNotificationToRead(notification)}
              color="primary"
              size="small"
              sx={{
                width: "30px ",
                minHeight: "30px",
                height: "30px",
              }}
            >
              <DoneIcon fontSize="inherit" />
            </MFab>
            <MFab
              color="error"
              size="small"
              sx={{
                width: "30px ",
                minHeight: "30px",
                height: "30px",
                marginLeft: "10px",
              }}
              onClick={() => removeNotification(notification)}
            >
              <CloseOutlinedIcon fontSize="inherit" />
            </MFab>
          </>
        ) : (
          <DoneIcon />
        )}
      </Box>
    </BoxNotification>
  );
}

export default function NotificationsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const totalUnRead = notifications.filter(
    (item) => item.isUnRead === true
  ).length;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };
  const removeNotification = (not) => {
    const newArray = notifications.filter((f) => f.id !== not.id);
    setNotifications(newArray);
  };
  const turnNotificationToRead = (notification) => {
    const arr = [...notifications];
    arr[arr.indexOf(notification)].isUnRead = false;
    setNotifications([...arr]);
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        size="large"
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <NotificationsIcon />
        </Badge>
      </MIconButton>
      <MenuDialog
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Scrollbar>
          <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">Notifications</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                You have {totalUnRead} unread messages
              </Typography>
            </Box>

            {totalUnRead > 0 && (
              <Tooltip title=" Mark all as read">
                <MIconButton color="primary" onClick={handleMarkAllAsRead}>
                  <DoneAllIcon />
                </MIconButton>
              </Tooltip>
            )}
          </Box>

          <Divider />

          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                New
              </ListSubheader>
            }
          >
            {notifications.slice(0, 2).map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                removeNotification={removeNotification}
                turnNotificationToRead={turnNotificationToRead}
              />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                Before that
              </ListSubheader>
            }
          >
            {notifications.slice(2, 5).map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                removeNotification={removeNotification}
                turnNotificationToRead={turnNotificationToRead}
              />
            ))}
          </List>
        </Scrollbar>
      </MenuDialog>
    </>
  );
}
