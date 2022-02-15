import React, { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "../EmojiPicker";
import {
  Box,
  Link,
  Card,
  Stack,
  Paper,
  Avatar,
  Checkbox,
  TextField,
  Typography,
  CardHeader,
  IconButton,
  AvatarGroup,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";

function BlogNews(props) {
  const commentInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const [message, setMessage] = useState("");
  const [isLiked, setLiked] = useState(false);
  const [likes, setLikes] = useState(35);
  const handleLike = () => {
    setLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  };
  const handleClickComment = () => {
    commentInputRef.current.focus();
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleClickAttach = () => {
    fileInputRef.current.click();
  };

  return (
    <Card>
      <CardHeader
        disableTypography
        avatar={
          <Avatar
            className="post-avatar"
            alt="Remy Sharp"
            src="/static/avatar/avatar_3.jpg"
            sx={{ width: 57, height: 57 }}
          />
        }
        title={
          <Link
            to="#"
            variant="subtitle2"
            color="text.primary"
            component={RouterLink}
          >
            Jaydon Frankie
          </Link>
        }
        subheader={
          <Typography
            variant="caption"
            sx={{ display: "block", color: "text.secondary" }}
          >
            11 Jun 2021
          </Typography>
        }
        action={
          <IconButton>
            <MoreVertIcon width={20} height={20} />
          </IconButton>
        }
      />

      <Stack spacing={3} sx={{ p: 3, pt: 1 }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          officiis nulla repellendus harum porro expedita.
        </Typography>
        <Box sx={{ position: "relative", pt: "calc(100% / 16 * 9)" }}>
          <Box
            component="img"
            alt="post media"
            src="/static/cover/cover_4.jpg"
            sx={{
              top: 0,
              width: 1,
              height: 1,
              borderRadius: 1,
              objectFit: "cover",
              position: "absolute",
            }}
          />
        </Box>
        <Stack direction="row" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                color="error"
                checked={isLiked}
                icon={<FavoriteIcon width={20} height={20} />}
                checkedIcon={<FavoriteIcon width={20} height={20} />}
                onChange={isLiked ? handleUnlike : handleLike}
              />
            }
            label={likes}
            sx={{ minWidth: 72, mr: 0 }}
          />
          <AvatarGroup
            max={4}
            sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }}
          >
            {Array.from(Array(4).keys()).map((person) => (
              <Avatar
                key={person}
                alt="avatar"
                src="/static/avatar/avatar_7.jpg"
              />
            ))}
          </AvatarGroup>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleClickComment}>
            <MessageIcon width={20} height={20} />
          </IconButton>
          <IconButton>
            <ShareIcon width={20} height={20} />
          </IconButton>
        </Stack>
        {/* {hasComments && ( */}
        <Stack spacing={1.5}>
          {/* {post.comments.map((comment) => ( */}
          <Stack key="1" direction="row" spacing={2}>
            <Avatar alt="avatar comment" src="/static/avatar/avatar_2.jpg" />
            <Paper sx={{ p: 1.5, flexGrow: 1, bgcolor: "#f4f6f8" }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ sm: "center" }}
                justifyContent="space-between"
                sx={{ mb: 0.5 }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
                  Lainey Davidson
                </Typography>
                <Typography variant="caption" sx={{ color: "text.disabled" }}>
                  11 December 2021
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                ut!
              </Typography>
            </Paper>
          </Stack>
          {/* ))} */}
        </Stack>
        {/* )} */}
        <Stack direction="row" alignItems="center">
          <Avatar alt="avatar comment" src="/static/avatar/avatar_3.jpg" />
          <TextField
            fullWidth
            size="small"
            value={message}
            inputRef={commentInputRef}
            placeholder="Write a comment…"
            onChange={handleChangeMessage}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClickAttach}>
                    <AddAPhotoIcon width={24} height={24} />
                  </IconButton>
                  <EmojiPicker
                    alignRight
                    value={message}
                    setValue={setMessage}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              ml: 2,
              mr: 1,
              "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: (theme) =>
                  `${theme.palette.grey[500_32]} !important`,
              },
            }}
          />
          <IconButton>
            <SendIcon width={24} height={24} />
          </IconButton>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} />
        </Stack>
      </Stack>
    </Card>
  );
}

export default BlogNews;
