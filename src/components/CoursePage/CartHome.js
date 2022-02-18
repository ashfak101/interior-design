import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Header from "../Shared/Header/Header";
import Cart from "./Cart";

function CartHome() {
  const [finalTotal, setFinalTotal] = useState(0);

  return (
    <div>
      <Header color={"black"} />
      <Box sx={{ background: "#EDF5FF", pt: 20, height: "80vh" }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <ShoppingCart
                finalTotal={finalTotal}
                setFinalTotal={setFinalTotal}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Cart finalTotal={finalTotal} setTotalPrice />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default CartHome;
