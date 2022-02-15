import React from "react";
import { Typography } from "@mui/material";
import AboutDetails from "./AboutDetails";
import Statistics from "./Statistics";
import AboutAccordion from "./AboutAccordion";

const dammyData = [
  {
    roleName: "Role type Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue fames donec consequat nisl, sit imperdiet sit sagittis. Malesuada eu id sed vulputate tempor. Egestas odio ultrices curabitur gravida et ornare scelerisque. Eu lacus, tortor dui nisi placerat. ",
  },
  {
    roleName: "Role type Name 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue fames donec consequat nisl, sit imperdiet sit sagittis. Malesuada eu id sed vulputate tempor. Egestas odio ultrices curabitur gravida et ornare scelerisque. Eu lacus, tortor dui nisi placerat. ",
  },
  {
    roleName: "Role type Name 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue fames donec consequat nisl, sit imperdiet sit sagittis. Malesuada eu id sed vulputate tempor. Egestas odio ultrices curabitur gravida et ornare scelerisque. Eu lacus, tortor dui nisi placerat. ",
  },
];
function About(props) {
  return (
    <div>
      {/* Statistics Box */}
      <Statistics />

      {/* Header About */}
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        About this club
      </Typography>
      {/* About Box */}
      <AboutDetails />
      {/* Accordion */}
      <AboutAccordion dammyData={dammyData} />
    </div>
  );
}

export default About;
