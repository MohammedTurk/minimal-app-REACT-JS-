import React from "react";
import * as Yup from "yup";
import {
  Modal,
  Fade,
  Box,
  TextField,
  Backdrop,
  Button,
  FormGroup,
  FormControlLabel,
  Grid,
  Checkbox,
  CardHeader,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Scrollbar from "../../Scrollbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Form, FormikProvider, useFormik } from "formik";
import { useSnackbar } from "notistack";

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

const CheckItem = styled(Checkbox)({
  position: "absolute",
  right: 0,
  top: 0,
});
const FormControlItem = styled(FormControlLabel)({
  marginRight: "0px ",
  marginLeft: "0px ",
  position: "relative",
  "& img": {
    borderRadius: "6px ",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

function MediaModal({ handleClose, openModal }) {
  const { enqueueSnackbar } = useSnackbar();

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: NewBlogSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        handleClose();
        resetForm();
        setSubmitting(false);
        enqueueSnackbar("Create success", { variant: "success" });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } =
    formik;

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
            <Box px={2.5}>
              <FormikProvider value={formik}>
                <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Box
                    mt={2}
                    mb={3}
                    display="flex"
                    justifyContent={"space-between"}
                    alignItems="center"
                  >
                    <CardHeader title="Create Album" style={{ padding: "0" }} />
                  </Box>
                  <TextField
                    size="small"
                    fullWidth
                    id="title"
                    label="Enter Title"
                    {...getFieldProps("title")}
                    error={Boolean(touched.title && errors.title)}
                    helperText={touched.title && errors.title}
                  />
                  <FormGroup row>
                    <Grid container rowSpacing={0.5} columnSpacing={1} my={3}>
                      <Grid item xs={4}>
                        <FormControlItem
                          control={
                            <CheckItem
                              icon={<CheckCircleIcon />}
                              checkedIcon={<CheckCircleIcon />}
                              name="album"
                              onChange={(e) =>
                                setFieldValue("album", e.target.checked)
                              }
                            />
                          }
                          label={
                            <img src="/static/cover/cover.jpg" alt="cover" />
                          }
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlItem
                          control={
                            <CheckItem
                              icon={<CheckCircleIcon />}
                              checkedIcon={<CheckCircleIcon />}
                              name="album"
                              onChange={(e) =>
                                setFieldValue("album", e.target.checked)
                              }
                            />
                          }
                          label={
                            <img src="/static/cover/cover_2.jpg" alt="cover" />
                          }
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlItem
                          control={
                            <CheckItem
                              icon={<CheckCircleIcon />}
                              checkedIcon={<CheckCircleIcon />}
                              name="album"
                              onChange={(e) =>
                                setFieldValue("album", e.target.checked)
                              }
                            />
                          }
                          label={
                            <img src="/static/cover/cover_3.jpg" alt="cover" />
                          }
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlItem
                          control={
                            <CheckItem
                              icon={<CheckCircleIcon />}
                              checkedIcon={<CheckCircleIcon />}
                              name="album"
                              onChange={(e) =>
                                setFieldValue("album", e.target.checked)
                              }
                            />
                          }
                          label={
                            <img src="/static/cover/cover_4.jpg" alt="cover" />
                          }
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlItem
                          control={
                            <CheckItem
                              icon={<CheckCircleIcon />}
                              checkedIcon={<CheckCircleIcon />}
                              name="album"
                              onChange={(e) =>
                                setFieldValue("album", e.target.checked)
                              }
                            />
                          }
                          label={
                            <img src="/static/cover/cover_5.jpg" alt="cover" />
                          }
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlItem
                          control={
                            <CheckItem
                              icon={<CheckCircleIcon />}
                              checkedIcon={<CheckCircleIcon />}
                              name="album"
                              onChange={(e) =>
                                setFieldValue("album", e.target.checked)
                              }
                            />
                          }
                          label={
                            <img src="/static/cover/cover_6.jpg" alt="cover" />
                          }
                        />
                      </Grid>
                    </Grid>
                  </FormGroup>

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
          </Scrollbar>
        </BoxModalBig>
      </Fade>
    </Modal>
  );
}

export default MediaModal;
