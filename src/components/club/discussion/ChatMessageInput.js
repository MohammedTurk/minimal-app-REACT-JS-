import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// material
import { styled } from "@mui/material/styles";
import {
  Input,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
//
import EmojiPicker from "../../EmojiPicker";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  minHeight: 56,
  display: "flex",
  position: "relative",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
}));

// ----------------------------------------------------------------------

ChatMessageInput.propTypes = {
  disabled: PropTypes.bool,
  conversationId: PropTypes.string,
  onSend: PropTypes.func,
};

export default function ChatMessageInput({
  disabled,
  conversationId,
  onSend,
  ...other
}) {
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = () => {
    if (!message) {
      return "";
    }
    if (onSend) {
      onSend({
        conversationId,
        messageId: uuidv4(),
        message,
        contentType: "text",
        attachments: [],
        createdAt: new Date(),
        senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
      });
    }
    return setMessage("");
  };

  return (
    <RootStyle {...other}>
      <Input
        disabled={disabled}
        fullWidth
        value={message}
        disableUnderline
        onKeyUp={handleKeyUp}
        onChange={handleChangeMessage}
        placeholder="Type a message"
        startAdornment={
          <InputAdornment position="start">
            <EmojiPicker
              disabled={disabled}
              value={message}
              setValue={setMessage}
            />
          </InputAdornment>
        }
        endAdornment={
          <Stack direction="row" spacing={0.5} mr={1.5}>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <AddAPhotoIcon />
            </IconButton>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <AttachFileIcon />
            </IconButton>
            <IconButton disabled={disabled} size="small">
              <MicIcon />
            </IconButton>
          </Stack>
        }
        sx={{ height: "100%" }}
      />

      <Divider orientation="vertical" flexItem />

      <IconButton
        color="primary"
        disabled={!message}
        onClick={handleSend}
        sx={{ mx: 1 }}
      >
        <SendIcon />
      </IconButton>

      <input type="file" ref={fileInputRef} style={{ display: "none" }} />
    </RootStyle>
  );
}
