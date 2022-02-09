import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bgImg from "../../../images/Banner/bg.png";
import Interior from "../../../images/Banner/Interior.png";
import IntButton from "../../Utils/IntButton";
export default function Banner() {
  const bgImage = {
    background: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <Box sx={bgImage}>
      <Box sx={{ paddingTop: "223px" }}>
        <img src={Interior} alt="" />
        <Box
          sx={{
            position: "absolute",
            top: "231px",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "51.6334px",
              lineHeight: "64px",
              color: "#282828",
            }}
          >
            New Level of
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "900",
              fontSize: "175.34px",
              lineHeight: "150px",
              color: "#282828",
              marginBottom: "60px",
            }}
          >
            Interior
          </Typography>
          <IntButton></IntButton>
        </Box>
      </Box>
    </Box>
  );
}
