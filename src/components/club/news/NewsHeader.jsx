import React, { useState, lazy, Suspense } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const NewsModal = lazy(() => import("./NewsModal"));

function NewsHeader(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ margin: "33px 0 20px 0" }}>
      <Grid container>
        <Grid item xs={6} display="flex" alignItems="end">
          {/* News Header*/}
          <Typography variant="h4">News</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Button
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleOpen}
          >
            Create News
          </Button>
        </Grid>
      </Grid>
      <Suspense fallback={<span></span>}>
        <NewsModal handleClose={handleClose} openModal={open} />
      </Suspense>
    </Box>
  );
}

export default NewsHeader;
