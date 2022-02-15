import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// material
import { Box, Card, Button, Typography, Stack, Paper } from "@mui/material";

// ----------------------------------------------------------------------

AccountBillingAddressBook.propTypes = {
  addressBook: PropTypes.array,
  handleOpenAddCard: PropTypes.func,
};

export default function AccountBillingAddressBook({
  addressBook,
  handleOpenAddCard,
}) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={3} alignItems="flex-start">
        <Typography variant="h6">Billing Info</Typography>

        {addressBook.map((address) => (
          <Paper
            key={address.id}
            sx={{
              p: 3,
              width: 1,
              bgcolor: "background.neutral",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {address.name}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <Typography
                variant="body2"
                component="span"
                sx={{ color: "text.secondary" }}
              >
                Address: &nbsp;
              </Typography>
              {`${address.street}, ${address.city}, ${address.state}, ${address.country} ${address.zipCode}`}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <Typography
                variant="body2"
                component="span"
                sx={{ color: "text.secondary" }}
              >
                Phone: &nbsp;
              </Typography>
              {address.phone}
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button
                color="error"
                size="small"
                startIcon={<DeleteOutlineIcon />}
                onClick={() => {}}
                sx={{ mr: 1 }}
              >
                Delete
              </Button>
              <Button size="small" startIcon={<EditIcon />} onClick={() => {}}>
                Edit
              </Button>
            </Box>
          </Paper>
        ))}

        <Button
          size="small"
          startIcon={<AddIcon />}
          onClick={handleOpenAddCard}
        >
          Add new address
        </Button>
      </Stack>
    </Card>
  );
}
