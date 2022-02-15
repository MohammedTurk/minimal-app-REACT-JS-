import React, { useState, lazy, Suspense } from "react";
import { Grid, Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const ResourcesModal = lazy(() => import("./ResourcesModal"));

function EventsHeader(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          {/*  Upcomming Events*/}
          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Resources owned by vaibhav
          </Typography>
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
            Create Resources
          </Button>
        </Grid>
      </Grid>
      <Suspense fallback={<span></span>}>
        <ResourcesModal handleClose={handleClose} openModal={open} />
      </Suspense>
    </div>
  );
}

export default EventsHeader;
