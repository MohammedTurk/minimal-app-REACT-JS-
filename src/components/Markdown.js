import ReactMarkdown from "react-markdown";
// markdown plugins
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
// material
import { styled } from "@mui/material/styles";
import { Link, Typography, Divider } from "@mui/material";

// ----------------------------------------------------------------------

const MarkdownWrapperStyle = styled("div")(({ theme }) => {
  const isLight = theme.palette.mode === "light";

  return {
    // List
    "& ul, & ol": {
      ...theme.typography.body1,
      paddingLeft: theme.spacing(5),
      "& li": {
        lineHeight: 2,
      },
    },

    // Code Block
    "& pre, & pre > code": {
      fontSize: 16,
      overflowX: "auto",
      whiteSpace: "pre",
      padding: theme.spacing(2),
      color: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[isLight ? 900 : 500_16],
    },
    "& code": {
      fontSize: 14,
      borderRadius: 4,
      whiteSpace: "pre",
      padding: theme.spacing(0.2, 0.5),
      color: theme.palette.warning[isLight ? "darker" : "lighter"],
      backgroundColor: theme.palette.warning[isLight ? "lighter" : "darker"],
      "&.hljs": { padding: 0, backgroundColor: "transparent" },
    },
  };
});

const components = {
  h1: ({ ...props }) => <Typography variant="h1" {...props} />,
  h2: ({ ...props }) => <Typography variant="h2" {...props} />,
  h3: ({ ...props }) => <Typography variant="h3" {...props} />,
  h4: ({ ...props }) => <Typography variant="h4" {...props} />,
  h5: ({ ...props }) => <Typography variant="h5" {...props} />,
  h6: ({ ...props }) => <Typography variant="h6" {...props} />,
  hr: ({ ...props }) => <Divider sx={{ my: 3 }} {...props} />,
  a: ({ ...props }) => {
    /* eslint-disable react/prop-types */
    const { href } = props;
    return !href.includes("http") ? (
      <Link {...props} />
    ) : (
      <Link target="_blank" rel="nofollow noreferrer noopener" {...props} />
    );
  },
};

// ----------------------------------------------------------------------

export default function Markdown({ ...other }) {
  return (
    <MarkdownWrapperStyle>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={components}
        {...other}
      />
    </MarkdownWrapperStyle>
  );
}
