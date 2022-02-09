import { Button, InputLabel, TextField } from "@mui/material";
import React from "react";
// import Box from "@mui/material/Box";

// import Button from "@mui/material/Button";
// import { InputLabel, TextField, Typography } from "@mui/material";

export default function Form({ text }) {
  const style = {
    textFieldStyle: {
      fontSize: "12px",
      color: "#494949",
      lineHeight: "8.58px",
    },
  };
  return (
    <form>
      <InputLabel sx={{ fontFamily: "lato", fontSize: "12px" }}>
        Email
      </InputLabel>
      <TextField
        type="email"
        id="outlined-name"
        sx={{ width: "100%", ...style.textFieldStyle }}
      ></TextField>
      <InputLabel sx={{ fontFamily: "lato", fontSize: "12px" }}>
        Password
      </InputLabel>
      <TextField
        id="outlined-name"
        sx={{ width: "100%", ...style.textFieldStyle }}
        type="Password"
      ></TextField>
      <Button
        variant="contained"
        sx={{
          background: "#C63437",
          color: "#fff",
          borderRadius: "2px",
          fontSize: "12px",
          display: "block",
          width: "100%",
          marginTop: "20px",
          padding: "8px 0",
        }}
      >
        {text}
      </Button>
    </form>
  );
}
