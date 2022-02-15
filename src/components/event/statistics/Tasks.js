import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Form, FormikProvider, useFormik } from "formik";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// material
import {
  Box,
  Card,
  Menu,
  Stack,
  Divider,
  Checkbox,
  MenuItem,
  CardHeader,
  Typography,
  FormControlLabel,
} from "@mui/material";
//
import { MIconButton } from "../../@material-extend";

// ----------------------------------------------------------------------

const TASKS = [
  "Create FireStone Logo",
  "Add SCSS and JS files if required",
  "Stakeholder Meeting",
  "Scoping & Estimations",
  "Sprint Showcase",
];

// ----------------------------------------------------------------------

// const IconStyle = styled("span")({
//   height: "10px",
//   width: "10px",
//   "& svg": {
//     width: "20px",
//     height: "20px",
//   },
// });
const useStyles = makeStyles({
  icons: {
    width: "20px",
    height: "20px",
  },
});

function MoreMenuButton() {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MIconButton ref={anchorRef} size="large" onClick={handleOpen}>
        <MoreVertIcon className={classes.icons} />
      </MIconButton>

      <Menu
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>
          <CheckCircleIcon className={classes.icons} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Mark Complete
          </Typography>
        </MenuItem>
        <MenuItem>
          <EditIcon className={classes.icons} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Edit
          </Typography>
        </MenuItem>
        <MenuItem>
          <ShareIcon className={classes.icons} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Share
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ color: "error.main" }}>
          <DeleteOutlineIcon className={classes.icons} />

          <Typography variant="body2" sx={{ ml: 2 }}>
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

TaskItem.propTypes = {
  task: PropTypes.string,
  checked: PropTypes.bool,
  formik: PropTypes.object,
};

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox
            {...getFieldProps("checked")}
            value={task}
            checked={checked}
            {...other}
          />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: "text.disabled",
                textDecoration: "line-through",
              }),
            }}
          >
            {task}
          </Typography>
        }
      />
      <MoreMenuButton />
    </Stack>
  );
}

export default function Tasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit } = formik;

  return (
    <Card>
      <CardHeader title="Tasks" />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {TASKS.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
