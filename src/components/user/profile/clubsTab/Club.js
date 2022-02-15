import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../../redux/store";
import { getFollowers, onToggleFollow } from "../../../../redux/slices/user";
import ClubItems from "./ClubItems";
import { Divider, Box } from "@mui/material";
function Club(props) {
  const { followers } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFollowers());
  }, [dispatch]);
  const handleToggleFollow = (followerId) => {
    dispatch(onToggleFollow(followerId));
  };
  const firstArr = followers.slice(0, 5);
  const secArr = followers.slice(5);

  return (
    <div>
      <Box>
        <ClubItems
          followers={firstArr}
          handleToggleFollow={handleToggleFollow}
          title={"Clubs vaibhav creted"}
        />
      </Box>
      <Divider sx={{ mt: 5, pt: 2 }} />
      <Box>
        <ClubItems
          followers={secArr}
          handleToggleFollow={handleToggleFollow}
          title={"Clubs vaibhav is member of"}
        />
      </Box>
    </div>
  );
}

export default Club;
