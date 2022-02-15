import React from "react";
import { Link, Card, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EmailIcon from "@mui/icons-material/Email";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
const IconStyle = styled("span")(({ theme }) => ({
  width: 9,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
  "& svg": {
    fontSize: "18px",
  },
}));
const CardBlog = styled(Card)({
  padding: " 0 20px 20px 20px",
});

function UserAbout(props) {
  return (
    <CardBlog>
      {/* about card Header*/}
      <Typography variant="h5" sx={{ mt: 2.5, mb: 2 }}>
        About
      </Typography>
      <Stack spacing={2}>
        <Typography variant="body1">
          Tart I love sugar plum I love oat cake. Sweet roll caramels I love
          jujubes. Topping cake wafer.
        </Typography>

        <Stack direction="row">
          <IconStyle>
            <AddLocationIcon />
          </IconStyle>
          <Typography variant="body2">USA</Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle>
            <EmailIcon />
          </IconStyle>
          <Typography variant="body2">brown.dejah@parisian.com</Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle>
            <BusinessCenterIcon />
          </IconStyle>
          <Typography variant="body2">
            UX Designer at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              Google
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle>
            <BusinessCenterIcon />
          </IconStyle>
          <Typography variant="body2">
            Studied at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              College of new Jersey
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </CardBlog>
  );
}

export default UserAbout;
