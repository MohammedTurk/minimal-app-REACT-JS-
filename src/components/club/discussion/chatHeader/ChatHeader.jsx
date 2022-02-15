import React, { useState, lazy, Suspense } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const ChatModal = lazy(() => import("./ChatModal"));
function ChatHeader(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ margin: " 33px 0 13px 0" }}>
      <Grid container>
        <Grid item xs={6} display="flex" alignItems="end">
          {/* Header About */}
          <Typography variant="h4">Channels</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Button
            onClick={handleOpen}
            startIcon={<AddCircleOutlineIcon />}
            color="primary"
          >
            Create Channel
          </Button>
        </Grid>
      </Grid>
      <Suspense fallback={<span></span>}>
        <ChatModal handleClose={handleClose} openModal={open} />
      </Suspense>
    </Box>
  );
}

export default ChatHeader;
