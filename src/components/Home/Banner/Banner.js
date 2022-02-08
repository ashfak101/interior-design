import { Box } from "@mui/system";
import React from "react";
import bgImg from "../../../images/Banner/bg.png";
export default function Banner() {
  const bgImage = {
    background: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return <Box sx={bgImage}></Box>;
}
