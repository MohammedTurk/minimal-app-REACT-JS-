import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Box, Stack, Card, IconButton } from "@mui/material";

const SOCIALS = [
  { name: "FaceBook", icon: <FacebookOutlinedIcon /> },
  { name: "Google", icon: <GoogleIcon /> },
  { name: "Instagram", icon: <InstagramIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
];
const Socialevent = () => {
  return (
    <Card>
      <Box p={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, officia
        nostrum nisi adipisci magni sunt voluptate rerum.
        <Stack
          spacing={1.5}
          direction="row"
          justifyContent={{ xs: "center", md: "flex-start" }}
          sx={{ mt: 2, mb: { xs: 5, md: 0 } }}
        >
          {SOCIALS.map((social) => (
            <IconButton
              key={social.name}
              color="primary"
              sx={{ p: 1 }}
              aria-label="Delete"
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default Socialevent;
