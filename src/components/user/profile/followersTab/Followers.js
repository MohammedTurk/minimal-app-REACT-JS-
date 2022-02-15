import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../../redux/store";
import { getFollowers, onToggleFollow } from "../../../../redux/slices/user";
import FollowerCard from "../../../FollowerCard";
function Followers(props) {
  const dispatch = useDispatch();
  const { followers } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getFollowers());
  }, [dispatch]);
  const handleToggleFollow = (followerId) => {
    dispatch(onToggleFollow(followerId));
  };
  return (
    <div>
      {/* Content Followers */}
      <FollowerCard
        followers={followers}
        onToggleFollow={handleToggleFollow}
        title={"Followers"}
      />
      <FollowerCard
        followers={followers}
        onToggleFollow={handleToggleFollow}
        title={"Following"}
      />
    </div>
  );
}

export default Followers;
