import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "../../../redux/store";
import { getFollowers, onToggleFollow } from "../../../redux/slices/user";

import { styled } from "@mui/material/styles";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import FollowerCard from "../../FollowerCard";

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  transition: theme.transitions.create("box-shadow", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": { boxShadow: theme.customShadows.z8 },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
  "& svg": {
    color: "#919eab",
  },
}));

function Members(props) {
  const dispatch = useDispatch();
  const { followers } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getFollowers());
  }, [dispatch]);
  const handleToggleFollow = (followerId) => {
    dispatch(onToggleFollow(followerId));
  };
  const Admins = followers.slice(0, 5);
  const members = followers.slice(5);
  return (
    <div>
      {/* Header Members */}
      <Typography variant="h4" sx={{ mt: 4 }}>
        Members
      </Typography>
      <Box mb={4} mt={1}>
        <FormControl size="small">
          <SearchStyle
            placeholder="Search events by name..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      {/* Admin & Board Members */}
      <FollowerCard
        followers={Admins}
        onToggleFollow={handleToggleFollow}
        title={"Admin & Board Members"}
      />
      <FollowerCard
        followers={members}
        onToggleFollow={handleToggleFollow}
        title={" Members"}
      />
    </div>
  );
}

export default Members;
