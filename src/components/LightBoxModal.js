import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
// material
import { alpha, useTheme } from "@mui/material/styles";
import { Typography, GlobalStyles } from "@mui/material";
import "react-image-lightbox/style.css";
// ----------------------------------------------------------------------

function LightboxModalStyles() {
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";

  const backgroundIcon = (iconName) => ({
    backgroundSize: "24px 24px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: alpha(theme.palette.grey[900], 0.8),
    backgroundImage: `url("/static/controls/${iconName}.svg")`,
  });

  return (
    <GlobalStyles
      styles={{
        "& .ReactModalPortal": {
          "& .ril__outer": {
            backdropFilter: "blur(8px)",
            backgroundColor: alpha(theme.palette.grey[900], 0.88),
          },

          // Toolbar
          "& .ril__toolbar": {
            height: "auto !important",
            padding: theme.spacing(2, 3),
            backgroundColor: "transparent",
          },
          "& .ril__toolbarLeftSide": { display: "none" },
          "& .ril__toolbarRightSide": {
            height: "auto !important",
            padding: 0,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            "& li": {
              display: "flex",
              alignItems: "center",
            },
            "& li:first-of-type": {
              flexGrow: 1,
            },
            "& li:not(:first-of-type)": {
              width: theme.spacing(5),
              height: theme.spacing(5),
              justifyContent: "center",
              marginLeft: theme.spacing(1),
              borderRadius: theme.shape.borderRadius,
            },
          },

          // Button
          "& button:focus": { outline: "none" },
          "& .ril__toolbarRightSide button": {
            width: "100%",
            height: "100%",
            "&.ril__zoomInButton": backgroundIcon("maximize-outline"),
            "&.ril__zoomOutButton": backgroundIcon("minimize-outline"),
            "&.ril__closeButton": backgroundIcon("close"),
          },
          "& .ril__navButtons": {
            padding: theme.spacing(3),
            borderRadius: "12px",
            "&.ril__navButtonPrev": {
              left: theme.spacing(2),
              right: "auto",
              ...backgroundIcon(isRTL ? "arrow-ios-forward" : "arrow-ios-back"),
            },
            "&.ril__navButtonNext": {
              right: theme.spacing(2),
              left: "auto",
              ...backgroundIcon(isRTL ? "arrow-ios-back" : "arrow-ios-forward"),
            },
          },
        },
      }}
    />
  );
}

LightboxModal.propTypes = {
  images: PropTypes.array.isRequired,
  photoIndex: PropTypes.number,
  setPhotoIndex: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default function LightboxModal({ images, isOpen, onClose, ...other }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  const [indexImg, setIndexImg] = useState(0);
  const showIndex = (
    <Typography variant="subtitle2">
      {`${indexImg + 1} / ${images.length}`}
    </Typography>
  );

  const toolbarButtons = [showIndex];
  const customStyles = {
    overlay: {
      zIndex: 9999,
    },
  };

  return (
    <>
      <LightboxModalStyles />

      {isOpen && (
        <Lightbox
          animationDuration={120}
          mainSrc={images[indexImg]}
          nextSrc={images[(indexImg + 1) % images.length]}
          prevSrc={images[(indexImg + images.length - 1) % images.length]}
          onCloseRequest={onClose}
          onMovePrevRequest={() =>
            setIndexImg((indexImg + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIndexImg((indexImg + 1) % images.length)}
          toolbarButtons={toolbarButtons}
          reactModalStyle={customStyles}
          {...other}
        />
      )}
    </>
  );
}
