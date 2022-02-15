import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Container,
  TextField,
  InputAdornment,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const options = ["option1", "option2", "option3"];
const CardSearch = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  marginTop: "64px",
  zIndex: 1000,
  boxShadow: "none",
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: "9px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const BoxItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 1,
  width: "100%",
  "& hr": {
    margin: "10px",
  },
}));
const TextItem = styled(TextField)(({ theme }) => ({
  "& fieldSet": {
    border: "none",
  },
  "& .css-1qamtaa-MuiInputBase-root-MuiOutlinedInput-root": {
    paddingLeft: 0,
  },
}));
function SearchBox(props) {
  const [category, setCategory] = React.useState("none");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <CardSearch>
      <Container>
        <BoxItem>
          <TextItem
            placeholder="Search for Keywords"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Divider orientation="vertical" flexItem />
          <TextItem placeholder="Enter Location" fullWidth />
          <Divider orientation="vertical" flexItem />
          <TextItem
            select
            placeholder="Search for Keywords"
            fullWidth
            value={category}
            onChange={handleChange}
          >
            <MenuItem value="none" disabled>
              Select category
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextItem>
          <Divider orientation="vertical" flexItem />
          <Button
            variant="contained"
            size="small"
            sx={{ fontWeight: 400, width: "250px", marginLeft: "10px" }}
          >
            Search
          </Button>
        </BoxItem>
      </Container>
    </CardSearch>
  );
}

export default SearchBox;
