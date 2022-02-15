import React, { useState, lazy, Suspense } from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const AboutModal = lazy(() => import("./AboutModal"));

function AccordionHeader(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ margin: "33px 0 20px 0" }}>
      <Grid container>
        <Grid item xs={6} display="flex" alignItems="end">
          {/* Header Roles for Club */}
          <Typography variant="h5">Roles for Club</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Button
            startIcon={<AddCircleOutlineIcon />}
            color="primary"
            onClick={handleOpen}
          >
            Add new role
          </Button>
        </Grid>
      </Grid>
      <Suspense fallback={<span></span>}>
        <AboutModal handleClose={handleClose} openModal={open} />
      </Suspense>
    </Box>
  );
}

export default AccordionHeader;
