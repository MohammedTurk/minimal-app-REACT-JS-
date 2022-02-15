import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";
// material
import {
  Box,
  Chip,
  Avatar,
  AvatarGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
// utils
import { fShortenNumber } from "../../utils/fotmatNumbers";

// ----------------------------------------------------------------------

BlogPostTags.propTypes = {
  post: PropTypes.object.isRequired,
  sx: PropTypes.object,
};

export default function BlogPostTags({ post, sx }) {
  const { favorite, tags, favoritePerson } = post;

  return (
    <Box sx={{ py: 3, ...sx }}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} sx={{ m: 0.5 }} />
      ))}

      <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              size="small"
              color="error"
              icon={<FavoriteIcon />}
              checkedIcon={<FavoriteIcon />}
            />
          }
          label={fShortenNumber(favorite)}
        />
        <AvatarGroup
          max={4}
          sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }}
        >
          {favoritePerson.map((person) => (
            <Avatar
              key={person.name}
              alt={person.name}
              src={person.avatarUrl}
            />
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  );
}
