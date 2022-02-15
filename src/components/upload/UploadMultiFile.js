import { isString } from "lodash";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { motion, AnimatePresence } from "framer-motion";
import { alpha, styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  List,
  Stack,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  IconButton,
  Button,
  ListItemSecondaryAction,
} from "@mui/material";

import { varFadeInRight } from "../../animate/fade/FadeIn";

const DropZoneStyle = styled("div")(({ theme }) => ({
  outline: "none",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(5, 1),
  borderRadius: "8px",
  backgroundColor: "#f4f6f8",
  border: "1px dashed rgb(145 158 171 / 32%)",
  "&:hover": { opacity: 0.72, cursor: "pointer" },
  [theme.breakpoints.up("md")]: { textAlign: "left", flexDirection: "row" },
}));

UploadMultiFile.propTypes = {
  error: PropTypes.bool,

  files: PropTypes.array,
  onRemove: PropTypes.func,
  onRemoveAll: PropTypes.func,
  sx: PropTypes.object,
};

export default function UploadMultiFile({
  error,
  files,
  onRemove,
  onRemoveAll,
  sx,
  ...other
}) {
  const hasFile = files.length > 0;

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      ...other,
    });

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: "error.main",
            borderColor: "error.light",
            bgcolor: "#ffe7d9",
          }),
        }}
      >
        <input {...getInputProps()} />
        <img alt="illustrations" src="/static/upload/illustrations.svg" />

        <Box sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 } }}>
          <Typography gutterBottom variant="h5">
            Drop or Select file
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Drop files here or click&nbsp;
            <Typography
              variant="body2"
              component="span"
              sx={{ color: "#00ab55", textDecoration: "underline" }}
            >
              browse
            </Typography>
            &nbsp;thorough your machine
          </Typography>
        </Box>
      </DropZoneStyle>

      <List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
        <AnimatePresence>
          {files.map((file) => {
            const { name } = file;
            const key = isString(file) ? file : name;

            return (
              <ListItem
                key={key}
                component={motion.div}
                {...varFadeInRight}
                sx={{
                  my: 1,
                  py: 0.75,
                  px: 2,
                  borderRadius: 1,
                  border: (theme) => `solid 1px ${theme.palette.divider}`,
                  bgcolor: "background.paper",
                }}
              >
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText
                  primary={isString(file) ? file : name}
                  primaryTypographyProps={{ variant: "subtitle2" }}
                  secondaryTypographyProps={{ variant: "caption" }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    size="small"
                    onClick={() => onRemove(file)}
                    sx={{
                      p: "2px",
                      color: "common.white",
                      bgcolor: (theme) => alpha(theme.palette.grey[600], 0.72),
                      "&:hover": {
                        bgcolor: (theme) =>
                          alpha(theme.palette.grey[900], 0.48),
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </AnimatePresence>
      </List>

      {hasFile && (
        <Stack direction="row" justifyContent="flex-end" mb={4}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={onRemoveAll}
            sx={{ mr: 1.5 }}
          >
            Remove all
          </Button>
        </Stack>
      )}
    </Box>
  );
}
