import PropTypes from "prop-types";
// material
import { Dialog } from "@mui/material";

import { makeStyles } from "@material-ui/core";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  newPosOfDialog: {
    position: "absolute",
    top: "0px",
    right: "0px",
    margin: 0,
    borderRadius: "0px !important",
    maxHeight: "100vh",
    height: "100vh",
    mt: 1.5,
    ml: 0.5,
    overflow: "inherit",
    padding: "20px",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
}));
MenuDialog.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default function MenuDialog({ children, sx, ...other }) {
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.newPosOfDialog }}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      {...other}
    >
      {children}
    </Dialog>
  );
}
