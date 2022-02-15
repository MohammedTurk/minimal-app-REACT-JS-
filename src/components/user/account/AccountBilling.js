import * as Yup from "yup";
import { useFormik, FormikProvider, Form } from "formik";
import { useState } from "react";
import { useSnackbar } from "notistack";
// material
import { Stack, Collapse, Box, TextField, Button, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// redux
import { useSelector } from "../../../redux/store";
// utils
import fakeRequest from "../../../utils/fakeRequest";
//
import AccountBillingAddressBook from "./AccountBillingAddressBook";

// ----------------------------------------------------------------------

export default function AccountBilling() {
  const { addressBook } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const NewCardSchema = Yup.object().shape({
    cardName: Yup.string().required("Name is required"),
    Relation: Yup.string().required("Relation number is required"),
    ContactNumber1: Yup.string().required("Contact Number is required"),
    ContactNumber2: Yup.string().required("Contact Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      cardName: "",
      Relation: "",
      ContactNumber1: "",
      ContactNumber2: "",
    },
    validationSchema: NewCardSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("done");
      await fakeRequest(500);
      handleCancel();
      resetForm();
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar("Add card success", { variant: "success" });
    },
  });
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
  const handleOpenAddCard = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleCancel = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <Grid container mt={2} spacing={3} justifyContent="flex-end">
      <Grid item xs={12} md={8}>
        <AccountBillingAddressBook
          addressBook={addressBook}
          handleOpenAddCard={handleOpenAddCard}
        />
        <Collapse in={open}>
          <Box
            sx={{
              padding: 3,
              marginTop: 3,
              borderRadius: 1,
              bgcolor: "background.neutral",
            }}
          >
            <FormikProvider value={formik}>
              <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="Name "
                      {...getFieldProps("cardName")}
                      error={Boolean(touched.cardName && errors.cardName)}
                      helperText={touched.cardName && errors.cardName}
                    />

                    <TextField
                      fullWidth
                      label="Relation"
                      {...getFieldProps("Relation")}
                      error={Boolean(touched.Relation && errors.Relation)}
                      helperText={touched.Relation && errors.Relation}
                    />
                  </Stack>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="Contact Number 1"
                      {...getFieldProps("ContactNumber1")}
                      error={Boolean(
                        touched.ContactNumber1 && errors.ContactNumber1
                      )}
                      helperText={
                        touched.ContactNumber1 && errors.ContactNumber1
                      }
                    />

                    <TextField
                      fullWidth
                      label="Contact Number 2"
                      {...getFieldProps("ContactNumber2")}
                      error={Boolean(
                        touched.ContactNumber2 && errors.ContactNumber2
                      )}
                      helperText={
                        touched.ContactNumber2 && errors.ContactNumber2
                      }
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    spacing={1.5}
                  >
                    <Button
                      type="button"
                      color="inherit"
                      variant="outlined"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      loading={isSubmitting}
                    >
                      Save Change
                    </LoadingButton>
                  </Stack>
                </Stack>
              </Form>
            </FormikProvider>
          </Box>
        </Collapse>
      </Grid>
    </Grid>
  );
}
