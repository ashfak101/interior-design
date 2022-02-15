import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";

function CartHome() {
  const [finalTotal, setFinalTotal] = useState(0);
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={12} xl={9}>
            <ShoppingCart
              finalTotal={finalTotal}
              setFinalTotal={setFinalTotal}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={3}>
            <Typography>Total: {finalTotal}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CartHome;
