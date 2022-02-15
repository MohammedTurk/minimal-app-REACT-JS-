import React, { useCallback } from "react";
import * as Yup from "yup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DatePicker from "@mui/lab/DatePicker";
import { useSnackbar } from "notistack";

import {
  Grid,
  Modal,
  Fade,
  Box,
  TextField,
  Switch,
  FormControl,
  InputAdornment,
  FormControlLabel,
  CardHeader,
  RadioGroup,
  OutlinedInput,
  FormHelperText,
  Backdrop,
  Radio,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Form, FormikProvider, useFormik } from "formik";
import Scrollbar from "../../Scrollbar";
import UploadMultiFile from "../../upload/UploadMultiFile";

const OPTIONS = ["Toy Story 3", "Logan"];

const BoxModalBig = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0%",
  right: "0%",
  width: "50%",
  backgroundColor: "#fff",
  outline: 0,

  height: "100vh",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
}));

function EventsModal({ handleClose, openModal }) {
  const { enqueueSnackbar } = useSnackbar();

  const NewBlogSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    roles: Yup.string().required("Roles is required"),
    category: Yup.string().required("Category is required"),
    numberDays: Yup.number().nullable().required("Number is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    documents: Yup.string().required("Documents is required"),
    cover: Yup.array().min(1, "Cover is required"),
    price: Yup.string().required("Price is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      roles: "",
      category: "",
      address: "",
      country: "",
      documents: "",
      price: "",
      startDate: null,
      endDate: null,
      numberDays: "",
      cover: [],
      payment: "",
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
    // isSubmitting,
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
            <Box px={3.5}>
              <FormikProvider value={formik}>
                <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Box
                    mt={2}
                    mb={3}
                    display="flex"
                    justifyContent={"space-between"}
                    alignItems="center"
                  >
                    <CardHeader
                      title="Add New Event"
                      style={{ padding: "0" }}
                    />
                    {/* <Switch checked /> */}
                    <FormControl component="fieldset">
                      <FormControlLabel
                        value="start"
                        label="Start"
                        labelPlacement="start"
                        control={<Switch defaultChecked />}
                      />
                    </FormControl>
                  </Box>
                  <Grid container rowSpacing={2} columnSpacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        size="small"
                        fullWidth
                        id="name"
                        label="Name"
                        {...getFieldProps("name")}
                        error={Boolean(touched.name && errors.name)}
                      />
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.name && errors.name}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        size="small"
                        id="category"
                        select
                        fullWidth
                        label="Category"
                        placeholder="category"
                        {...getFieldProps("category")}
                        SelectProps={{ native: true }}
                        error={Boolean(touched.category && errors.category)}
                      >
                        <option value="" />
                        {OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </TextField>
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.category && errors.category}{" "}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          id="startDate"
                          label="Start Date"
                          value={values.startDate}
                          onChange={(newValue) => {
                            setFieldValue("startDate", newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          id="endDate"
                          label="End Date"
                          value={values.endDate}
                          onChange={(newValue) => {
                            setFieldValue("endDate", newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                      <TextField
                        id="days"
                        fullWidth
                        label="Number of days"
                        {...getFieldProps("numberDays")}
                        error={Boolean(touched.numberDays && errors.numberDays)}
                      />
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.numberDays && errors.numberDays}
                      </FormHelperText>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        id="description"
                        fullWidth
                        label="Description"
                        rows={3}
                        multiline
                        {...getFieldProps("description")}
                        error={Boolean(
                          touched.description && errors.description
                        )}
                      />
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.description && errors.description}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        id="address"
                        label="Address"
                        {...getFieldProps("address")}
                        error={Boolean(touched.address && errors.address)}
                      />
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.address && errors.address}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        id="country"
                        select
                        fullWidth
                        label="Country"
                        placeholder="country"
                        {...getFieldProps("country")}
                        SelectProps={{ native: true }}
                        error={Boolean(touched.country && errors.country)}
                      >
                        <option value="" />
                        {OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </TextField>
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.country && errors.country}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        select
                        id="roles"
                        fullWidth
                        label="Roles"
                        placeholder="roles"
                        {...getFieldProps("roles")}
                        SelectProps={{ native: true }}
                        error={Boolean(touched.roles && errors.roles)}
                      >
                        <option value="" />
                        {OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </TextField>
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.roles && errors.roles}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        id="documents"
                        fullWidth
                        label="Documents to carry"
                        {...getFieldProps("documents")}
                        error={Boolean(touched.documents && errors.documents)}
                      />
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.documents && errors.documents}
                      </FormHelperText>
                      <Button
                        startIcon={<AddCircleOutlineIcon />}
                        color="primary"
                        sx={{ my: 1 }}
                      >
                        Add More
                      </Button>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        id="description"
                        fullWidth
                        label="Description"
                        {...getFieldProps("description")}
                        error={Boolean(
                          touched.description && errors.description
                        )}
                      />
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.description && errors.description}
                      </FormHelperText>

                      <Button
                        startIcon={<AddCircleOutlineIcon />}
                        color="primary"
                        sx={{ my: 1 }}
                      >
                        Add More
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
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
                    </Grid>

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Allow disallow share and comment on event"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Mark event as paid or free"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          {...getFieldProps("price")}
                          error={Boolean(touched.price && errors.price)}
                          endAdornment={
                            <InputAdornment position="end">₹</InputAdornment>
                          }
                          aria-describedby="outlined-weight-helper-text"
                          inputProps={{
                            "aria-label": "weight",
                          }}
                        />
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          style={{
                            color: "red",
                          }}
                        >
                          {touched.price && errors.price}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <FormControl component="fieldset">
                    <RadioGroup row defaultValue="online">
                      <FormControlLabel
                        value="online"
                        name="payment"
                        control={<Radio />}
                        label="Online Payment"
                        onChange={(e) => setFieldValue("payment", "online")}
                      />
                      <FormControlLabel
                        value="offline"
                        name="payment"
                        control={<Radio />}
                        label="Offline Payment"
                        onChange={(e) => setFieldValue("payment", "offline")}
                      />
                    </RadioGroup>
                  </FormControl>

                  <Box sx={{ display: "flex", justifyContent: "end" }} my={2}>
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

export default EventsModal;
