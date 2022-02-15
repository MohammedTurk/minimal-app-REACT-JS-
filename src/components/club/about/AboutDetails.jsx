import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Divider, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  mutedColor: {
    color: "rgb(0 0 0 / 60%)",
  },
});
const BoxItem = styled(Grid)(({ theme }) => ({
  boxShadow: theme.customShadows.z20,
  borderRadius: "16px",
  padding: "20px",
}));

export const IconStyle = styled("span")(({ theme }) => ({
  width: "15px",
  height: "27px",
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

function AboutDetails(props) {
  const Classes = useStyle();

  return (
    <BoxItem>
      <Typography variant="h6">About Us</Typography>
      <Typography
        variant="body2"
        component="p"
        mb={4}
        className={Classes.mutedColor}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue
        fames donec consequat nisl, sit imperdiet sit sagittis. Malesuada eu id
        sed vulputate tempor. Egestas odio ultrices curabitur gravida et ornare
        scelerisque. Eu lacus, tortor dui nisi placerat. Tempus risus pretium
        arcu, tincidunt faucibus. Ferment um, facilisis nunc sit sit amet.
        Tortor, ac id mi sodales eu nulla quis fermentum commodo. Tempor diam id
        libero convallis neque aliquam morbi. Montes, arcu aliquam, vulputate
        imperdiet in non interdum sem.
      </Typography>
      <Divider light />
      <Grid container mt={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" mb={0.5}>
            Visibility
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={4}
            className={Classes.mutedColor}
          >
            Mon to Sat 9 am - 7 pm
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" mb={0.5}>
            Location
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={4}
            className={Classes.mutedColor}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            congue
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" mb={0.5}>
            Category
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={4}
            className={Classes.mutedColor}
          >
            Categort type 1, Categort type 2, Categort type 3{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" mb={0.5}>
            Created at
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={4}
            className={Classes.mutedColor}
          >
            03-04-2021
          </Typography>
        </Grid>
      </Grid>
      <Divider light />

      <Grid container mt={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Contact</Typography>
          <Stack direction="row" my={2} className={Classes.mutedColor}>
            <IconStyle>
              <LocationOnIcon />
            </IconStyle>
            <Typography variant="body2">
              Chandigarh Sector 20 Lorem ipsum dolor sit amet
            </Typography>
          </Stack>
          <Stack direction="row" my={2} className={Classes.mutedColor}>
            <IconStyle>
              <EmailIcon />
            </IconStyle>
            <Typography variant="body2">davinder2038@gmail.com </Typography>
          </Stack>
          <Stack direction="row" my={2} className={Classes.mutedColor}>
            <IconStyle>
              <PhoneIcon />
            </IconStyle>
            <Typography variant="body2">+91-904-1226-707 </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Emergency Contact</Typography>
          <Stack direction="row" my={2} className={Classes.mutedColor}>
            <IconStyle>
              <PersonIcon />
            </IconStyle>
            <Typography variant="body2">Harpreet kaur </Typography>
          </Stack>
          <Stack direction="row" my={2} className={Classes.mutedColor}>
            <IconStyle>
              <PhoneIcon />
            </IconStyle>
            <Typography variant="body2">
              +91-904-1226-707, +91-700-9119-313
            </Typography>
          </Stack>
          <Stack direction="row" my={2} className={Classes.mutedColor}>
            <IconStyle>
              <PeopleOutlineIcon />
            </IconStyle>
            <Typography variant="body2">Sister</Typography>
          </Stack>
        </Grid>
      </Grid>
    </BoxItem>
  );
}

export default AboutDetails;
