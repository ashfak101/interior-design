import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../Shared/Header/Header";
import Payment from "./Payment";

function CheckOutHome() {
  return (
    <>
      <Header color={"#282828"}></Header>
      <Box sx={{ background: "#EDF5FF" }}>
        <Container maxWidth="xl">
          <Payment />
        </Container>
      </Box>
    </>
  );
}

export default CheckOutHome;
