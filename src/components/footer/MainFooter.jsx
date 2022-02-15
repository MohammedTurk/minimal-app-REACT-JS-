import { Link as RouterLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// material
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  IconButton,
  Stack,
  Box,
} from "@mui/material";

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: "FaceBook", icon: <FacebookOutlinedIcon /> },
  { name: "Google", icon: <GoogleIcon /> },
  { name: "Linkedin", icon: <LinkedInIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
];

const LINKS = [
  {
    headline: "Your Account",
    children: [
      { name: "Setting", href: "#" },
      { name: "Log out", href: "#" },
      { name: "Help", href: "#" },
    ],
  },
  {
    headline: "Discover",
    children: [
      { name: "Groups", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Topics", href: "#" },
      { name: "Cities", href: "#" },
      { name: "Online Events", href: "#" },
      { name: "Local Guides", href: "#" },
    ],
  },
  {
    headline: "The Expedition",
    children: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Help", href: "#" },
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  marginTop: "100px",
  color: theme.palette.grey[300],
  position: "relative",
  backgroundColor: theme.palette.grey[800],
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid item xs={8} md={3} sx={{ mb: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <img
                src="/static/logoFooter.svg"
                alt="logo-footer"
                style={{ width: "40px", height: "40px" }}
              />
              <Typography ml={2} sx={{ fontWeight: 500, fontSize: "20px" }}>
                The Expedition
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              The starting point for your next project with Minimal UI Kit,
              built on the newest version of Material-UI ©, ready to be
              customized to your style.
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: "block" }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eget
          blandit non sollicitudin enim a.
        </Typography>
      </Container>
    </RootStyle>
  );
}
