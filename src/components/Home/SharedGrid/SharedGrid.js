import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import StarRateIcon from "@mui/icons-material/StarRate";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function SharedGrid({ data }) {
  console.log(data);
  return (
    <Grid
      item
      sx={{
        padding: "20px",

        textAlign: "center",
      }}
      xs={12}
      md={6}
      lg={4}
    >
      <Item
        sx={{
          background: "transparent",
          border: "1px solid rgba(40, 40, 40, 0.24)",
          boxShadow: "none",
          p: "20px",
        }}
      >
        <img style={{ width: "100%" }} src={data.img} alt="" />

        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#3F3F3F",
            margin: "30px 0",
          }}
        >
          {data.name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography
            display={{
              display: "flex",
              fontSize: "16px",
              color: "#3F3F3F",
              fontWeight: "500",
            }}
          >
            <PersonIcon />
            {data.people} User
          </Typography>
          <Typography
            display={{
              display: "flex",
              fontSize: "16px",
              color: "#3F3F3F",
              fontWeight: "500",
            }}
          >
            <StarRateIcon sx={{ color: "#E8B237" }} /> {data.rating} Rating
          </Typography>
        </Box>
      </Item>
    </Grid>
  );
}

export default SharedGrid;
