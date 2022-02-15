import PropTypes from "prop-types";
import { random } from "lodash";
import PersonIcon from "@mui/icons-material/Person";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { styled } from "@mui/material/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// material
import {
  Box,
  Grid,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
// utils
import { fShortenNumber } from "../../../../utils/fotmatNumbers";

// ----------------------------------------------------------------------

const SpanIcon = styled("span")({
  "& svg": {
    marginRight: "6px",
    height: 35,
    width: 35,
    color: "#637381",
  },
});
const MOCK_SOCIALS = [
  {
    name: "Users",
    value: random(9999, 99999),
    icon: (
      <SpanIcon>
        <PersonIcon />
      </SpanIcon>
    ),
  },
  {
    name: "Clubs",
    value: random(9999, 99999),
    icon: (
      <SpanIcon>
        <NightlifeIcon />
      </SpanIcon>
    ),
  },
  {
    name: "Events",
    value: random(9999, 99999),
    icon: (
      <SpanIcon>
        <EventNoteIcon />
      </SpanIcon>
    ),
  },
  {
    name: "Impression",
    value: random(9999, 99999),
    icon: (
      <SpanIcon>
        <ThumbUpAltIcon />
      </SpanIcon>
    ),
  },
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.shape({
    icon: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.number,
  }),
};

function SiteItem({ site }) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: "center" }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h6">{fShortenNumber(value)}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function UserStatistics() {
  return (
    <Card>
      <CardHeader title="User Statistics" />
      <CardContent>
        <Grid container spacing={2}>
          {MOCK_SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
