import React, { useCallback } from "react";
import * as Yup from "yup";
import {
  Modal,
  Fade,
  Box,
  TextField,
  Backdrop,
  FormHelperText,
  Stack,
  Button,
  CardHeader,
} from "@mui/material";
import { useSnackbar } from "notistack";

import { Form, FormikProvider, useFormik } from "formik";
import Scrollbar from "../../../Scrollbar";

import { styled } from "@mui/material/styles";
import UploadMultiFile from "../../../upload/UploadMultiFile";

const BoxModalBig = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0%",
  right: "0%",
  width: "50%",
  backgroundColor: "#fff",
  outline: 0,
  px: 4,
  height: "100vh",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
}));

function ResourcesModal({ handleClose, openModal }) {
  const { enqueueSnackbar } = useSnackbar();

  const NewBlogSchema = Yup.object().shape({
    resourceName: Yup.string().required("Resource name is required"),
    nickName: Yup.string().required("Nick name is required"),
    registrationNumber: Yup.number().required(
      "Registration number is required"
    ),
    kmDirven: Yup.number().required("Km dirven is required"),
    cover: Yup.array().min(1, "Cover is required"),
  });

  const formik = useFormik({
    initialValues: {
      resourceName: "",
      nickName: "",
      registrationNumber: "",
      kmDirven: "",
      cover: [],
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

  const {
    errors,
    values,
    touched,
    handleSubmit,
    setFieldValue,
    getFieldProps,
  } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setFieldValue(
        "cover",
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFieldValue]
  );

  const handleRemoveAll = () => {
    setFieldValue("cover", []);
  };

  const handleRemove = (file) => {
    const filteredItems = values.cover.filter((_file) => _file !== file);
    setFieldValue("cover", [...filteredItems]);
  };

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
            <Box p={3}>
              <FormikProvider value={formik}>
                <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Box
                    mb={3}
                    display="flex"
                    justifyContent={"space-between"}
                    alignItems="center"
                  >
                    <CardHeader
                      title="Create Resources"
                      style={{ padding: "0" }}
                    />
                  </Box>
                  <Stack spacing={2} mb={2}>
                    <TextField
                      fullWidth
                      id="resourceName"
                      label="Resource Name"
                      {...getFieldProps("resourceName")}
                      error={Boolean(
                        touched.resourceName && errors.resourceName
                      )}
                      helperText={touched.resourceName && errors.resourceName}
                    />
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      id="nickName"
                      label="Nick Name"
                      {...getFieldProps("nickName")}
                      error={Boolean(touched.nickName && errors.nickName)}
                      helperText={touched.nickName && errors.nickName}
                    />
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      id="registrationNumber"
                      label="Registration Number"
                      {...getFieldProps("registrationNumber")}
                      error={Boolean(
                        touched.registrationNumber && errors.registrationNumber
                      )}
                      helperText={
                        touched.registrationNumber && errors.registrationNumber
                      }
                    />
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      id="kmDirven"
                      label="Km Dirven"
                      {...getFieldProps("kmDirven")}
                      error={Boolean(touched.kmDirven && errors.kmDirven)}
                      helperText={touched.kmDirven && errors.kmDirven}
                    />
                  </Stack>
                  <div>
                    <UploadMultiFile
                      error={Boolean(touched.cover && errors.cover)}
                      files={values.cover}
                      onDrop={handleDrop}
                      onRemove={handleRemove}
                      onRemoveAll={handleRemoveAll}
                    />
                    {touched.cover && errors.cover && (
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.cover && errors.cover}
                      </FormHelperText>
                    )}
                  </div>
                  <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={handleClose}
                    >
                      Cancle
                    </Button>
                    <Button variant="contained" type="submit" sx={{ ml: 2 }}>
                      Create
                    </Button>
                  </Box>
                </Form>
              </FormikProvider>
            </Box>
          </Scrollbar>
        </BoxModalBig>
      </Fade>
    </Modal>
  );
}

export default ResourcesModal;
