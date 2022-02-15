import { useState } from "react";
import GalleryItem from "../../GalleryItem";
// material
import { Box, Grid, Card } from "@mui/material";
// utils
import LightboxModal from "../../LightBoxModal";

// ----------------------------------------------------------------------
const dummyData = [
  {
    id: 1,
    imges: ["/static/cover/Cover.jpg", "/static/cover/Cover_2.jpg"],
    postAt: "14 December 2021",
    title: "Apply These 7 Secret Techniques To Improve Event",
  },
  {
    id: 2,
    imges: ["/static/cover/Cover_3.jpg", "/static/cover/Cover_2.jpg"],
    postAt: "12 December 2001",
    title: "Apply These 7 Secret Techniques To Improve Event",
  },
  {
    id: 3,
    postAt: "17 December 2018",
    imges: ["/static/cover/Cover_7.jpg", "/static/cover/Cover_6.jpg"],
    title: "Apply These 7 Secret Techniques To Improve Event",
  },
  {
    id: 4,
    imges: ["/static/cover/Cover_5.jpg", "/static/cover/Cover_4.jpg"],
    postAt: "26 December 2019",
    title: "Apply These 7 Secret Techniques To Improve Event",
  },
  {
    id: 5,
    imges: ["/static/cover/Cover_4.jpg", "/static/cover/Cover.jpg"],
    postAt: "19 December 2021",
    title: "Apply These 7 Secret Techniques To Improve Event",
  },
  {
    id: 6,
    imges: [
      "/static/cover/Cover.jpg",
      "/static/cover/Cover.jpg",
      "/static/cover/Cover.jpg",
      "/static/cover/Cover.jpg",
    ],
    postAt: "10 December 2008",
    title: "Apply These 7 Secret Techniques To Improve Event",
  },
];
export default function MediaCard(props) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);

  const handleOpenLightbox = (imges) => {
    setOpenLightbox(true);
    setSelectedImage(imges);
  };

  return (
    <Box>
      <Card sx={{ boxShadow: "none" }}>
        <Grid container spacing={3}>
          {dummyData.map((image) => (
            <Grid key={image.id} item xs={12} sm={6} md={4}>
              <GalleryItem image={image} onOpenLightbox={handleOpenLightbox} />
            </Grid>
          ))}
        </Grid>

        <LightboxModal
          images={selectedImage}
          isOpen={openLightbox}
          onClose={() => setOpenLightbox(false)}
        />
      </Card>
    </Box>
  );
}
