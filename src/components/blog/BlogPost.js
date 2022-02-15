import { useEffect } from "react";

// material
import {
  Box,
  Card,
  Divider,
  Skeleton,
  Typography,
  Pagination,
} from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getPost } from "../../redux/slices/blogs";

// components
import BlogtPostTags from "./BlogPostTags";
import BlogPostCommentList from "./BlogPostCommentList";
import BlogPostCommentForm from "./BlogPostCommentForm";

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    <Skeleton
      width="100%"
      height={560}
      variant="rectangular"
      sx={{ borderRadius: 2 }}
    />
    <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
      <Skeleton variant="circular" width={64} height={64} />
      <Box sx={{ flexGrow: 1, ml: 2 }}>
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
      </Box>
    </Box>
  </>
);

export default function BlogPost() {
  const dispatch = useDispatch();

  const { post, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getPost("event-on-a-budget-7-tips-from-the-great-depression"));
  }, [dispatch]);

  return (
    <>
      {post && (
        <Card>
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Typography variant="h6" sx={{ mb: 5 }}>
              {post.description}
            </Typography>
            <Typography variant="body2" sx={{ mb: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              donec in in purus arcu velit arcu, sem. Imperdiet mi purus nunc
              egestas et dictumst sit. Sit turpis amet nisl elit. Mattis arcu
              quis mauris porta cursus ut tellus donec. Massa enim facilisi vel
              tincidunt. Fringilla tempus vitae tortor ac ipsum posuere. Aliquet
              tortor, tincidunt nibh rutrum nulla mollis metus.
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              donec in in purus arcu velit arcu, sem. Imperdiet mi purus nunc
              egestas et dictumst sit. Sit turpis amet nisl elit. Mattis arcu
              quis mauris porta cursus ut tellus donec. Massa enim facilisi vel
              tincidunt. Fringilla tempus vitae tortor ac ipsum posuere. Aliquet
              tortor, tincidunt nibh rutrum nulla mollis metus.
            </Typography>
            <img width="100%" alt="coverPost" src="/static/cover/event.jpg" />

            <Typography variant="body2" sx={{ mb: 5, mt: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              donec in in purus arcu velit arcu, sem. Imperdiet mi purus nunc
              egestas et dictumst sit. Sit turpis amet nisl elit. Mattis arcu
              quis mauris porta cursus ut tellus donec. Massa enim facilisi vel
              tincidunt. Fringilla tempus vitae tortor ac ipsum posuere. Aliquet
              tortor, tincidunt nibh rutrum nulla mollis metus.
            </Typography>
            <Typography variant="body2" sx={{ mb: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              donec in in purus arcu velit arcu, sem. Imperdiet mi purus nunc
              egestas et dictumst sit. Sit turpis amet nisl elit. Mattis arcu
              quis mauris porta cursus ut tellus donec. Massa enim facilisi vel
              tincidunt. Fringilla tempus vitae tortor ac ipsum posuere. Aliquet
              tortor, tincidunt nibh rutrum nulla mollis metus.
            </Typography>

            <Box sx={{ my: 5 }}>
              <Divider />
              <BlogtPostTags post={post} />
              <Divider />
            </Box>

            <Box sx={{ display: "flex", mb: 2 }}>
              <Typography variant="h4">Comments</Typography>
              <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
                ({post.comments.length})
              </Typography>
            </Box>

            <BlogPostCommentList post={post} />

            <Box
              sx={{
                mb: 5,
                mt: 3,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Pagination count={8} color="primary" />
            </Box>

            <BlogPostCommentForm />
          </Box>
        </Card>
      )}

      {!post && SkeletonLoad}

      {error && <Typography variant="h6">404 Post not found</Typography>}
    </>
  );
}
