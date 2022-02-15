import React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionHeader from "./AccordionHeader";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";

const BoxItem = styled(Box)(({ theme }) => ({
  boxShadow: theme.customShadows.z20,
  borderRadius: "16px",
  "& .css-18fkb84-MuiPaper-root-MuiAccordion-root.Mui-expanded": {
    boxShadow: "none",
  },
}));

function AboutAccordion({ dammyData }) {
  return (
    <div>
      <AccordionHeader />
      {dammyData.map((role) => {
        return (
          <BoxItem sx={{ padding: "10px" }} key={role.roleName}>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="root">{role.roleName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{role.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </BoxItem>
        );
      })}
    </div>
  );
}

export default AboutAccordion;
