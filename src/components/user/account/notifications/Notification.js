import { useSnackbar } from "notistack";
import { useFormik, Form, FormikProvider } from "formik";
// material
import {
  Card,
  Stack,
  Switch,
  Typography,
  FormControlLabel,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// redux
import { useSelector } from "../../../../redux/store";
// utils
import fakeRequest from "../../../../utils/fakeRequest";

// ----------------------------------------------------------------------

const ACTIVITY_OPTIONS = [
  {
    value: "activityComments",
    label: "Comanna comments on my avont",
  },
  {
    value: "activityAnswers",
    label: "Someone comments on my news",
  },
  { value: "activityFollows", label: "Someone follows me" },
];

const APPLICATION_OPTIONS = [
  { value: "applicationNews", label: "News and announcements" },
  { value: "applicationProduct", label: "Weekly product updates" },
  { value: "applicationBlog", label: "Weekly blog digest" },
];
const CLUB_OPTIONS = [
  { value: "clubEvents", label: "Event is created" },
  { value: "clubNews", label: "News is published" },
  { value: "clubMedia", label: "Album is created" },
];

// ----------------------------------------------------------------------
const FormControlItem = styled(FormControlLabel)({
  marginLeft: 0,
  marginRight: 0,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
export default function AccountNotifications() {
  const { enqueueSnackbar } = useSnackbar();
  const { notifications } = useSelector((state) => state.user);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      notificationTurn: true,
      activityComments: notifications.activityComments,
      activityAnswers: notifications.activityAnswers,
      activityFollows: notifications.activityFollows,
      applicationNews: notifications.applicationNews,
      applicationProduct: notifications.applicationProduct,
      applicationBlog: notifications.applicationBlog,
      clubEvents: false,
      clubNews: false,
      clubMedia: false,
    },
    onSubmit: async (values, { setSubmitting }) => {
      await fakeRequest(500);
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar("Save success", { variant: "success" });
    },
  });

  const { values, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} mb={3}>
            <Card sx={{ p: 2.5, py: 3.5 }}>
              <Box>
                <FormControlItem
                  control={
                    <Switch
                      {...getFieldProps("notificationTurn")}
                      checked={values.notificationTurn}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="h5">Notification On</Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        If you wish to stop all notifications turn this off. You
                        can change this anytime
                      </Typography>
                    </Box>
                  }
                  labelPlacement="start"
                />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2.5 }}>
              <Stack spacing={2} sx={{ width: 1 }}>
                <Typography variant="h6">Activity</Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "7px !important" }}
                >
                  Send me email when
                </Typography>

                <Stack alignItems="flex-start">
                  {ACTIVITY_OPTIONS.map((activity) => (
                    <FormControlItem
                      key={activity.value}
                      control={
                        <Switch
                          {...getFieldProps(activity.value)}
                          checked={values[activity.value]}
                        />
                      }
                      label={activity.label}
                      labelPlacement="start"
                      sx={{
                        color: "text.secondary",
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2.5 }}>
              <Stack spacing={2} sx={{ width: 1 }}>
                <Typography variant="h6">Clubs Activitv</Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "7px !important" }}
                >
                  Send me email when activitv in following club
                </Typography>
                <Stack alignItems="flex-start">
                  {CLUB_OPTIONS.map((item) => (
                    <FormControlItem
                      key={item.value}
                      control={
                        <Switch
                          {...getFieldProps(item.value)}
                          checked={values[item.value]}
                        />
                      }
                      labelPlacement="start"
                      label={item.label}
                      sx={{
                        color: "text.secondary",
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2.5 }}>
              <Stack spacing={2} sx={{ width: 1 }}>
                <Typography variant="h6">Application</Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "7px !important" }}
                >
                  Send me email for
                </Typography>
                <Stack alignItems="flex-start">
                  {APPLICATION_OPTIONS.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      control={
                        <Switch
                          {...getFieldProps(item.value)}
                          checked={values[item.value]}
                        />
                      }
                      labelPlacement="start"
                      label={item.label}
                      sx={{
                        mx: 0,
                        display: "flex",
                        justifyContent: "space-between",
                        color: "text.secondary",
                        width: "100%",
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
