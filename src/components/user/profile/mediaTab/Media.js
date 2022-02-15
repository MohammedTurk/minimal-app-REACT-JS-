import { useState, useEffect } from "react";
import { findIndex } from "lodash";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// redux
import { useDispatch, useSelector } from "../../../../redux/store";
import { getGallery } from "../../../../redux/slices/user";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Card,
  IconButton,
  Typography,
  CardContent,
} from "@mui/material";
// utils
import LightBoxModalChat from "../../../LightBoxModalChat";
import { fDate } from "../../../../utils/formatTime";

// ----------------------------------------------------------------------

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
// ----------------------------------------------------------------------

GalleryItem.propTypes = {
  image: PropTypes.object,
  onOpenLightbox: PropTypes.func,
};

function GalleryItem({ image, onOpenLightbox }) {
  const { imageUrl, title, postAt } = image;
  return (
    <Card sx={{ pt: "100%", cursor: "pointer" }}>
      <GalleryImgStyle
        alt="gallery image"
        src={imageUrl}
        onClick={() => onOpenLightbox(imageUrl)}
      />

      <CaptionStyle>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            {fDate(postAt)}
          </Typography>
        </div>
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
      </CaptionStyle>
    </Card>
  );
}

// ----------------------------------------------------------------------

export default function MediaCard(props) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);

  const { gallery } = useSelector((state) => state.user);
  const imagesLightbox = gallery.map((img) => img.imageUrl);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  const handleOpenLightbox = (url) => {
    const selectedImage = findIndex(imagesLightbox, (index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <Box>
      {/* Media Header*/}
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
        Media
      </Typography>
      <Card sx={{ boxShadow: "none" }}>
        <Grid container spacing={3}>
          {gallery.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <GalleryItem image={item} onOpenLightbox={handleOpenLightbox} />
            </Grid>
          ))}
        </Grid>

        <LightBoxModalChat
          images={imagesLightbox}
          photoIndex={selectedImage}
          setPhotoIndex={setSelectedImage}
          isOpen={openLightbox}
          onClose={() => setOpenLightbox(false)}
        />
      </Card>
    </Box>
  );
}
