import PropTypes from "prop-types";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Box,
  Grid,
  Link,
  Card,
  Avatar,
  Typography,
  CardContent,
  AvatarGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Post_Info = [
  { id: 1, number: 10, icon: <ShareIcon /> },
  { id: 2, number: 30, icon: <StarBorderIcon /> },
];

const CoverImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const TitleDate = styled(Typography)({
  display: "block",
  color: "#637381d9",
  fontWeight: "400",
  fontSize: "15px",
  lineHeight: "16px",
  margin: "5px 0",
});

const ShapeIcon = styled(Box)({
  zIndex: 9,
  width: "136px",
  height: "58px",
  left: "-9px",
  bottom: "-26px",
  position: "absolute",
  mask: `url(/static/icons/shape-avatar.svg) no-repeat center / contain`,
  WebkitMask: `url(/static/icons/shape-avatar.svg) no-repeat center / contain`,
  backgroundColor: "#fff",
});
const CardPost = styled(Card)({
  boxShadow:
    "0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px rgba(145, 158, 171, 0.24); ",
  borderRadius: "16px ",
  margin: " 0 auto  ",
});
const LinkTitle = styled(Link)({
  marginTop: "17px",
  overflow: "hidden",
  fontWeight: 500,
  color: " #212B36",
  fontSize: "17px",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const TitleCaption = styled(Typography)({
  margin: " 10px 0",
  fontSize: "15px",
  lineHeight: "20px",
  color: "#454F5B",
  width: "75%",
  fontWeight5: 500,
});

const IconStyle = styled("span")(({ theme }) => ({
  flexShrink: 0,
  marginRight: "3px",
  "& svg": {
    width: 18,
    height: 18,
    marginTop: "3px",
  },
}));
// ----------------------------------------------------------------------

PostItem.propTypes = {
  post: PropTypes.object,
};

function PostItem({ post }) {
  const { id, cover, avatar, caption, work, link, date } = post;
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <CardPost>
        <Box sx={{ position: "relative", paddingTop: "calc(100% * 3 / 5.5)" }}>
          <ShapeIcon></ShapeIcon>

          <Avatar
            alt="avatar"
            src={avatar}
            sx={{
              left: "31px",
              zIndex: 9,
              width: "55px",
              height: "55px",
              bottom: "-26px",
              position: "absolute",
            }}
          />
          <CoverImgStyle alt="cover" src={cover} />
        </Box>

        <CardContent sx={{ padding: "22px", pt: 4.5 }}>
          <TitleDate gutterBottom>{date}</TitleDate>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ fontWeight: 700, color: "#161C24" }}
          >
            {work}
          </Typography>

          <LinkTitle
            to={`/events/event_${id}`}
            color="inherit"
            component={RouterLink}
          >
            {link}
          </LinkTitle>
          <TitleCaption variant="subtitle1">{caption}</TitleCaption>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexWrap: "wrap",
              color: "text.disabled",
              justifyContent: "space-between",
            }}
          >
            <AvatarGroup
              max={4}
              sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }}
            >
              {Array.from(Array(4).keys()).map((person) => (
                <Avatar
                  key={person}
                  alt="avatar"
                  src="/static/avatar/avatar_2.jpg"
                />
              ))}
            </AvatarGroup>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              {Post_Info.map((item) => (
                <Box
                  key={item.id}
                  ml={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#637381",
                  }}
                >
                  <span>
                    <IconStyle>{item.icon}</IconStyle>
                  </span>
                  <Typography variant="body2">{item.number}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </CardPost>
    </Grid>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function Posts({ posts }) {
  return (
    <>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
}
