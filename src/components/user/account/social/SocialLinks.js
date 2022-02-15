import { useSnackbar } from "notistack";
import { useFormik, Form, FormikProvider } from "formik";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
// material
import { Stack, Card, TextField, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// redux
import { useSelector } from "../../../../redux/store";
// utils
import fakeRequest from "../../../../utils/fakeRequest";

// ----------------------------------------------------------------------

const SOCIAL_LINKS_OPTIONS = [
  {
    value: "facebookLink",
    icon: <FacebookOutlinedIcon />,
  },
  {
    value: "instagramLink",
    icon: <InstagramIcon />,
  },
  {
    value: "linkedinLink",
    icon: <LinkedInIcon />,
  },
  {
    value: "twitterLink",
    icon: <TwitterIcon />,
  },
];

// ----------------------------------------------------------------------

export default function SocialLinks() {
  const { enqueueSnackbar } = useSnackbar();
  const { myProfile } = useSelector((state) => state.user);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      facebookLink: myProfile.facebookLink,
      instagramLink: myProfile.instagramLink,
      linkedinLink: myProfile.linkedinLink,
      twitterLink: myProfile.twitterLink,
    },
    onSubmit: async (values, { setSubmitting }) => {
      await fakeRequest(500);
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar("Save success", { variant: "success" });
    },
  });

  const { handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Card sx={{ p: 3 }}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="flex-end">
            {SOCIAL_LINKS_OPTIONS.map((link) => (
              <TextField
                key={link.value}
                fullWidth
                {...getFieldProps(link.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {link.icon}
                    </InputAdornment>
                  ),
                }}
              />
            ))}

            <LoadingButton
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Save Changes
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
}
