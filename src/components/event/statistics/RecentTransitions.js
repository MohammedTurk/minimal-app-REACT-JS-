import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { format } from "date-fns";
import { sentenceCase } from "change-case";
import { Link as RouterLink } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
// material
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Menu,
  Table,
  Avatar,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  TableContainer,
} from "@mui/material";
// utils
import { fCurrency } from "../../../utils/fotmatNumbers";
//
import Label from "../../Label";
import Scrollbar from "../../Scrollbar";
import { MIconButton } from "../../@material-extend";

// ----------------------------------------------------------------------
const useStyles = makeStyles({
  icons: {
    width: "20px",
    height: "20px",
  },
});

const RECENT_TRANSITIONS = [
  {
    id: "1b0fc8a1-cd68-41f6-899e-d0e0676c90bb",
    name: "Dr. Alize Donnelly",
    avatar: "/static/avatar/avatar_8.jpg",
    type: "Income",
    message: "Receive money from",
    category: "Annette Black",
    date: 1627556358365,
    status: "in_progress",
    amount: 811.45,
  },
  {
    id: "b7846c12-662c-465a-8e81-8a35df7531ef",
    name: "Santino Gottlieb",
    avatar: "/static/avatar/avatar_2.jpg",
    type: "Expenses",
    message: "Payment for",
    category: "Courtney Henry",
    date: 1627556329038,
    status: "completed",
    amount: 436.03,
  },
  {
    id: "336c73d5-3d0e-42e2-9218-ff671dfa28ee",
    name: "Camilla Gusikowski",
    avatar: "/static/avatar/avatar_3.jpg",
    type: "Receive",
    message: "Payment for",
    category: "Theresa Webb",
    date: 1627556339677,
    status: "failed",
    amount: 82.26,
  },
  {
    id: "2cfd360a-f678-4d47-9df0-cef936231315",
    name: null,
    avatar: null,
    type: "Expenses",
    message: "Payment for",
    category: "Beauty & Health",
    date: 1627547330510,
    status: "completed",
    amount: 480.73,
  },
  {
    id: "6b61fa9a-7ce4-4f45-a62a-b711de432b28",
    name: null,
    avatar: null,
    type: "Expenses",
    message: "Payment for",
    category: "Books",
    date: 1627556347676,
    status: "in_progress",
    amount: 11.45,
  },
];

// ----------------------------------------------------------------------

AvatarIcon.propTypes = {
  icon: PropTypes.object,
};

function AvatarIcon({ icon }) {
  return (
    <Avatar
      sx={{
        width: 48,
        height: 48,
        color: "text.secondary",
        bgcolor: "background.neutral",
      }}
    >
      {icon}
    </Avatar>
  );
}

function RenderAvatar(transitions) {
  const classes = useStyles();

  if (transitions.category === "Books") {
    return <AvatarIcon icon={<BookIcon className={classes.icons} />} />;
  }
  if (transitions.category === "Beauty & Health") {
    return <AvatarIcon icon={<FavoriteIcon className={classes.icons} />} />;
  }
  return transitions.avatar ? (
    <Avatar
      alt={transitions.category}
      src={transitions.avatar}
      sx={{
        width: 48,
        height: 48,
        boxShadow: (theme) => theme.customShadows.z8,
      }}
    />
  ) : null;
}

MoreMenuButton.propTypes = {
  onDelete: PropTypes.func,
  onDownload: PropTypes.func,
  onPrint: PropTypes.func,
  onShare: PropTypes.func,
};

function MoreMenuButton({ onDownload, onPrint, onShare, onDelete }) {
  const classes = useStyles();

  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <MIconButton ref={menuRef} size="large" onClick={handleOpen}>
          <MoreVertIcon className={classes.icons} />
        </MIconButton>
      </>

      <Menu
        open={open}
        anchorEl={menuRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={onDownload}>
          <DownloadIcon className={classes.icons} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Download
          </Typography>
        </MenuItem>
        <MenuItem onClick={onPrint}>
          <PrintIcon className={classes.icons} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Print
          </Typography>
        </MenuItem>
        <MenuItem onClick={onShare}>
          <ShareIcon className={classes.icons} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Share
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onDelete} sx={{ color: "error.main" }}>
          <DeleteOutlineIcon className={classes.icons} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default function BankingRecentTransitions() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const handleClickDownload = () => {};
  const handleClickPrint = () => {};
  const handleClickShare = () => {};
  const handleClickDelete = () => {};

  return (
    <>
      <Card>
        <CardHeader title="Recent Transitions" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {RECENT_TRANSITIONS.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ position: "relative" }}>
                          {RenderAvatar(row)}
                          <Box
                            sx={{
                              right: 0,
                              bottom: 0,
                              width: 18,
                              height: 18,
                              display: "flex",
                              borderRadius: "50%",
                              position: "absolute",
                              alignItems: "center",
                              color: "common.white",
                              bgcolor: "error.main",
                              justifyContent: "center",
                              ...(row.type === "Income" && {
                                bgcolor: "success.main",
                              }),
                            }}
                          >
                            {row.type === "Income" ? (
                              <SouthWestIcon sx={{ height: 14, width: 14 }} />
                            ) : (
                              <NorthEastIcon sx={{ height: 14, width: 14 }} />
                            )}
                          </Box>
                        </Box>
                        <Box sx={{ ml: 2 }}>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {row.message}
                          </Typography>
                          <Typography variant="subtitle2">
                            {" "}
                            {row.category}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle2">
                        {format(new Date(row.date), "dd MMM yyyy")}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {format(new Date(row.date), "p")}
                      </Typography>
                    </TableCell>

                    <TableCell>{fCurrency(row.amount)}</TableCell>

                    <TableCell>
                      <Label
                        variant={isLight ? "ghost" : "filled"}
                        color={
                          (row.status === "completed" && "success") ||
                          (row.status === "in_progress" && "warning") ||
                          "error"
                        }
                      >
                        {sentenceCase(row.status)}
                      </Label>
                    </TableCell>

                    <TableCell align="right">
                      <MoreMenuButton
                        onDownload={handleClickDownload}
                        onPrint={handleClickPrint}
                        onShare={handleClickShare}
                        onDelete={handleClickDelete}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 2, textAlign: "right" }}>
          <Button
            to="#"
            size="small"
            color="inherit"
            component={RouterLink}
            endIcon={<ArrowForwardIosIcon />}
          >
            View All
          </Button>
        </Box>
      </Card>
    </>
  );
}
