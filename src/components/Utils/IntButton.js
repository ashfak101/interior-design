import { Button } from "@mui/material";
import React from "react";

const btnInt = {
  fontSize: "16px",
  fontFamily: "Roboto",
  fontWeight: "700",
  lineHeight: "19.2px",
  color: "#fff",
  background: "#282828",
  padding: "21px 50px",
  borderRadius: "0",
};
export default function IntButton() {
  return <Button sx={btnInt}>Learn More</Button>;
}
