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
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { useSnackbar } from "notistack";

const multipleRoles = ["Toy Story 3", "Logan"];

const style = {
  position: "absolute",
  top: "0%",
  right: "0%",
  width: 400,
  bgcolor: "background.paper",
  outline: 0,
  px: 2.5,
  height: "100vh",
};

function AboutModal({ handleClose, openModal }) {
  const { enqueueSnackbar } = useSnackbar();

  const NewBlogSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    roles: Yup.string().required("Roles is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      roles: "",
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
        <Box sx={style}>
          <FormikProvider value={formik}>
            <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Box
                mt={2}
                mb={3}
                display="flex"
                justifyContent={"space-between"}
                alignItems="center"
              >
                <CardHeader title="Add Role" style={{ padding: "0" }} />
              </Box>
              <TextField
                select
                fullWidth
                label="roles"
                placeholder="roles"
                {...getFieldProps("roles")}
                SelectProps={{ native: true }}
                error={Boolean(touched.roles && errors.roles)}
                helperText={touched.roles && errors.roles}
                sx={{ mb: 2 }}
              >
                <option value="" />
                {multipleRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </TextField>
              <TextField
                fullWidth
                id="demo-helper-text-misaligned-no-helper"
                label="Name"
                {...getFieldProps("name")}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                sx={{ mb: 2 }}
              />
              <TextField
                id="outlined-multiline-static"
                fullWidth
                label="Description"
                rows={4}
                multiline
                {...getFieldProps("description")}
                error={Boolean(touched.description && errors.description)}
                helperText={touched.description && errors.description}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Button variant="outlined" onClick={handleClose}>
                  Cancle
                </Button>
                <Button type="submit" variant="contained" sx={{ ml: 2 }}>
                  Add
                </Button>
              </Box>
            </Form>
          </FormikProvider>
        </Box>
      </Fade>
    </Modal>
  );
}

export default AboutModal;
