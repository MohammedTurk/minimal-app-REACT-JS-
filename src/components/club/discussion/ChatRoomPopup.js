import PropTypes from "prop-types";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
// material
import { styled } from "@mui/material/styles";
import { Avatar, Typography, DialogContent } from "@mui/material";
//
import DialogAnimate from "../../animate/DialogAnimate";

// ----------------------------------------------------------------------

const RowStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(1.5),
}));

const IconStyle = styled("span")(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: theme.palette.text.secondary,
  "& svg": {
    fontSize: "19px !important",
  },
}));

// ----------------------------------------------------------------------

ChatRoomPopup.propTypes = {
  participant: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default function ChatRoomPopup({
  participant,
  isOpen,
  onClose,
  ...other
}) {
  const { name, avatar, position, address, phone, email } = participant;

  return (
    <DialogAnimate
      fullWidth
      maxWidth="xs"
      open={isOpen}
      onClose={onClose}
      {...other}
    >
      <DialogContent sx={{ pb: 5, textAlign: "center" }}>
        <Avatar
          alt={name}
          src={avatar}
          sx={{
            mt: 5,
            mb: 2,
            mx: "auto",
            width: 96,
            height: 96,
          }}
        />
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" paragraph sx={{ color: "text.secondary" }}>
          {position}
        </Typography>

        <RowStyle>
          <IconStyle>
            <PinDropIcon />
          </IconStyle>
          <Typography variant="body2">{address}</Typography>
        </RowStyle>
        <RowStyle>
          <IconStyle>
            <LocalPhoneIcon />
          </IconStyle>
          <Typography variant="body2">{phone}</Typography>
        </RowStyle>
        <RowStyle>
          <IconStyle>
            <EmailIcon />
          </IconStyle>
          <Typography variant="body2">{email}</Typography>
        </RowStyle>
      </DialogContent>
    </DialogAnimate>
  );
}
