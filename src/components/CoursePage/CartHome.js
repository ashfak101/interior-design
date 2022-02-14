import { Container, Grid } from "@mui/material";
import React from "react";
import ShoppingCart from "./ShoppingCart";

function CartHome({ cart, setCart }) {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={12} xl={9}>
            <ShoppingCart cart={cart} setCart={setCart} />
          </Grid>
          <Grid item xs={12} md={12} xl={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CartHome;
