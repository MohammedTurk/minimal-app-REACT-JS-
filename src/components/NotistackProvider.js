import PropTypes from "prop-types";
import { SnackbarProvider } from "notistack";
import InfoIcon from "@mui/icons-material/Info";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// material
import { alpha, useTheme } from "@mui/material/styles";
import { Box, GlobalStyles } from "@mui/material";

// ----------------------------------------------------------------------

function SnackbarStyles() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <GlobalStyles
      styles={{
        "#root": {
          "& .SnackbarContent-root": {
            width: "100%",
            padding: theme.spacing(1.5),
            margin: theme.spacing(0.25, 0),
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey[isLight ? 0 : 800],
            backgroundColor: theme.palette.grey[isLight ? 900 : 0],
            "&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo":
              {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
              },
          },
          "& .SnackbarItem-message": {
            padding: "0 !important",
            fontWeight: theme.typography.fontWeightMedium,
          },
          "& .SnackbarItem-action": {
            marginRight: 0,
            color: theme.palette.action.active,
            "& svg": { width: 20, height: 20 },
          },
        },
      }}
    />
  );
}

SnackbarIcon.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.string,
};

function SnackbarIcon({ icon, color }) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        justifyContent: "center",
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      {icon}
    </Box>
  );
}

NotistackProvider.propTypes = {
  children: PropTypes.node,
};

export default function NotistackProvider({ children }) {
  return (
    <>
      <SnackbarStyles />

      <SnackbarProvider
        dense
        maxSnack={5}
        // preventDuplicate
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        iconVariant={{
          success: <SnackbarIcon icon={<CheckCircleIcon />} color="success" />,
          error: <SnackbarIcon icon={<InfoIcon />} color="error" />,
          warning: <SnackbarIcon icon={<WarningIcon />} color="warning" />,
          info: <SnackbarIcon icon={<ErrorIcon />} color="info" />,
        }}
      >
        {children}
      </SnackbarProvider>
    </>
  );
}
