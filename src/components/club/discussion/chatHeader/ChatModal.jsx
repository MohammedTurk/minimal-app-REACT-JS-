import React from "react";
import * as Yup from "yup";
import {
  Modal,
  Fade,
  Box,
  TextField,
  Backdrop,
  Button,
  CardHeader,
  FormHelperText,
} from "@mui/material";
import Scrollbar from "../../../Scrollbar";
import { Form, FormikProvider, useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { useSnackbar } from "notistack";

const OPTIONS = ["Toy Story 3", "Logan"];

const BoxModalBig = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0%",
  right: "0%",
  width: "50%",
  backgroundColor: "#fff",
  padding: "20px",
  outline: 0,
  px: 4,
  height: "100vh",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
  "&::-webkit-scrollbar": {
    width: "6px",
    height: " 6px",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    borderRadius: "10px",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  "&::-webkit-scrollbar-thumb:active": {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
}));

const TextFieldItem = styled(TextField)({
  marginTop: "20px",
});
function NewsModal({ handleClose, openModal }) {
  const { enqueueSnackbar } = useSnackbar();
  const NewBlogSchema = Yup.object().shape({
    channelName: Yup.string().required("Channel Name is required"),
    purpose: Yup.string().required("Channel Name is required"),
    events: Yup.string().required("This field is required"),
    members: Yup.string().required("Members is required"),
  });

  const formik = useFormik({
    initialValues: {
      channelName: "",
      purpose: "",
      events: "",
      members: "",
    },
    validationSchema: NewBlogSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        resetForm();
        handleClose();
        setSubmitting(false);
        enqueueSnackbar("Create success", { variant: "success" });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <BoxModalBig>
          <Scrollbar>
            <FormikProvider value={formik}>
              <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box
                  mt={0}
                  mb={1}
                  display="flex"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <CardHeader title="Create News" style={{ padding: "0" }} />
                </Box>
                <TextFieldItem
                  size="small"
                  fullWidth
                  id="channelName"
                  label="Channel Name"
                  {...getFieldProps("channelName")}
                  error={Boolean(touched.channelName && errors.channelName)}
                  helperText={touched.channelName && errors.channelName}
                />
                <TextFieldItem
                  fullWidth
                  size="small"
                  id="purpose"
                  label="Purpose"
                  {...getFieldProps("purpose")}
                  error={Boolean(touched.purpose && errors.purpose)}
                  helperText={touched.purpose && errors.purpose}
                />
                <TextFieldItem
                  size="small"
                  id="events"
                  select
                  fullWidth
                  label="events"
                  placeholder="events"
                  {...getFieldProps("events")}
                  SelectProps={{ native: true }}
                  error={Boolean(touched.events && errors.events)}
                >
                  <option value="" />
                  {OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextFieldItem>
                <FormHelperText error sx={{ px: 2 }}>
                  {touched.events && errors.events}
                </FormHelperText>
                <TextFieldItem
                  size="small"
                  id="members"
                  select
                  fullWidth
                  label="members"
                  placeholder="members"
                  {...getFieldProps("members")}
                  SelectProps={{ native: true }}
                  error={Boolean(touched.members && errors.members)}
                >
                  <option value="" />
                  {OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextFieldItem>
                <FormHelperText error sx={{ px: 2 }}>
                  {touched.members && errors.members}
                </FormHelperText>

                <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancle
                  </Button>
                  <Button variant="contained" type="submit" sx={{ ml: 2 }}>
                    Add
                  </Button>
                </Box>
              </Form>
            </FormikProvider>
          </Scrollbar>
        </BoxModalBig>
      </Fade>
    </Modal>
  );
}

export default NewsModal;
