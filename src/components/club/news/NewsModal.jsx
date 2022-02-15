import React, { useCallback } from "react";
import * as Yup from "yup";
import {
  Modal,
  Fade,
  Box,
  TextField,
  Backdrop,
  Typography,
  FormHelperText,
  Button,
  FormControl,
  FormControlLabel,
  CardHeader,
  Switch,
} from "@mui/material";
import { useSnackbar } from "notistack";

import { Form, FormikProvider, useFormik } from "formik";
import Scrollbar from "../../Scrollbar";

import { styled } from "@mui/material/styles";
import UploadMultiFile from "../../upload/UploadMultiFile";

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

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

function NewsModal({ handleClose, openModal }) {
  const { enqueueSnackbar } = useSnackbar();

  const NewBlogSchema = Yup.object().shape({
    text: Yup.string().required("Text is required"),
    cover: Yup.array().min(1, "Cover is required"),
  });

  const formik = useFormik({
    initialValues: {
      text: "",
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
                    <CardHeader title="Create News" style={{ padding: "0" }} />
                    {/* <Switch checked /> */}
                    <FormControl component="fieldset">
                      <FormControlLabel
                        value="start"
                        label="Public"
                        labelPlacement="start"
                        control={<Switch defaultChecked />}
                      />
                    </FormControl>
                  </Box>
                  <TextField
                    sx={{ mb: 2 }}
                    multiline
                    size="small"
                    rows={6}
                    fullWidth
                    id="demo-helper-text-misaligned-no-helper"
                    label="Enter Text"
                    {...getFieldProps("text")}
                    error={Boolean(touched.text && errors.text)}
                    helperText={touched.text && errors.text}
                  />
                  <div>
                    <LabelStyle>Cover</LabelStyle>
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
                      Add
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

export default NewsModal;
