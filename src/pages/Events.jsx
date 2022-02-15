import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Posts from "../components/posts/Posts";
import SearchBox from "../components/posts/SearchBox";
const dummyPosts = [
  {
    id: 1,
    cover: "/static/cover/cover_4.jpg",
    avatar: "/static/avatar/avatar_1.jpg",
    date: "SAT, OCT 30 @ 4:00 PM IST",
    work: "Carrier & Business",
    link: "Startups & Entrepreneurs - Open house networking",
    caption: "Chandigarh Entrepreneurs Group . Chandigarh, IN",
  },
  {
    id: 2,
    cover: "/static/cover/cover.jpg",
    avatar: "/static/avatar/avatar_2.jpg",
    date: "MON, OCT 20 @ 3:00 PM IST",
    work: "Carrier & Business",
    link: "Startups & Entrepreneurs - Open house networking",
    caption: "Chandigarh Entrepreneurs Group . Chandigarh, IN",
  },
  {
    id: 3,
    cover: "/static/cover/cover_3.jpg",
    avatar: "/static/avatar/avatar_3.jpg",
    date: "WEN, OCT 10 @ 7:00 PM IST",
    work: "Carrier & Business",
    link: "Startups & Entrepreneurs - Open house networking",
    caption: "Chandigarh Entrepreneurs Group . Chandigarh, IN",
  },
  {
    id: 4,
    cover: "/static/cover/cover_5.jpg",
    avatar: "/static/avatar/avatar_4.jpg",

    date: "MON, NOV 1 @ 4:00 AM IST",
    work: "Carrier & Business",
    link: "Startups & Entrepreneurs - Open house networking",
    caption: "Chandigarh Entrepreneurs Group . Chandigarh, IN",
  },
  {
    id: 5,
    cover: "/static/cover/cover_6.jpg",
    avatar: "/static/avatar/avatar_5.jpg",

    date: "SAT, DEC 12 @ 2:00 AM IST",
    work: "Carrier & Business",
    link: "Startups & Entrepreneurs - Open house networking",
    caption: "Chandigarh Entrepreneurs Group . Chandigarh, IN",
  },
  {
    id: 6,
    cover: "/static/cover/cover_7.jpg",
    avatar: "/static/avatar/avatar_6.jpg",

    date: "FRI, OCT 12 @ 10:00 AM IST",
    work: "Carrier & Business",
    link: "Startups & Entrepreneurs - Open house networking",
    caption: "Chandigarh Entrepreneurs Group . Chandigarh, IN",
  },
];
const BoxItem = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: "80px",
  },
}));
function Events(props) {
  return (
    <>
      <SearchBox />
      <Container maxWidth="lg">
        {/* Header Events */}
        <BoxItem>
          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Events
          </Typography>
          <Posts posts={dummyPosts} />
        </BoxItem>
      </Container>
    </>
  );
}

export default Events;
