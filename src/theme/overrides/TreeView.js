import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

export default function TreeView(theme) {
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: <IndeterminateCheckBoxIcon />,
        defaultExpandIcon: <AddBoxIcon />,
        defaultEndIcon: (
          <Box>
            <CancelPresentationOutlinedIcon />
          </Box>
        ),
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: { ...theme.typography.body2 },
        iconContainer: { width: "auto" },
      },
    },
  };
}
