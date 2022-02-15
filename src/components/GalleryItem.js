import React from "react";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// material
import { alpha, styled } from "@mui/material/styles";
import { Card, IconButton, Typography, CardContent } from "@mui/material";

const CaptionStyle = styled(CardContent)(({ theme }) => ({
  bottom: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  backdropFilter: "blur(3px)",
  WebkitBackdropFilter: "blur(3px)", // Fix on Mobile
  justifyContent: "space-between",
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.grey[900], 0.72),
  borderBottomLeftRadius: theme.shape.borderRadiusMd,
  borderBottomRightRadius: theme.shape.borderRadiusMd,
}));

const GalleryImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

GalleryItem.propTypes = {
  image: PropTypes.object,
  onOpenLightbox: PropTypes.func,
};

export default function GalleryItem({ image, onOpenLightbox }) {
  const { title, postAt, imges } = image;

  return (
    <Card sx={{ cursor: "pointer", paddingTop: "100%" }}>
      <GalleryImgStyle
        alt="gallery image"
        src={imges[0]}
        onClick={() => onOpenLightbox(imges)}
      />

      <CaptionStyle>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            {postAt}
          </Typography>
        </div>
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
      </CaptionStyle>
    </Card>
  );
}
