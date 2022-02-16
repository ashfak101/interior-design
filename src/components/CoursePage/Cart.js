import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import DataProvider from "../../context/DataProvider";
function Cart({ finalTotal }) {
  const [text, setText] = useState("");
  const [disCount, setDiscount] = useState(false);
  const vat = finalTotal * 0.15;
  let total = finalTotal + vat;
  const [disCountPrice, setDisCountPrice] = useState(total);

  const handleDiscount = () => {
    if (text === "apex") {
      let discoutTotal = total / 2;
      setDisCountPrice(discoutTotal);
      setDiscount(true);
      alert("Discount applied");
    }
  };
  const handleDisDelete = () => {
    setDiscount(false);
    setDisCountPrice(0);
  };

  //   setTotalPrice(total);
  //   console.log(totalPrice);

  console.log(text);
  return (
    <Box
      sx={{
        p: 2,
        background: "#0D2A62",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#ffffff", fontWeight: "bold", mb: 1 }}
      >
        Busket Total
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Coupon Code"
        sx={{ width: "100%", background: "#fff" }}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={handleDiscount}
        sx={{ position: "absolute", right: "20px", height: "55px" }}
      >
        Apply
      </Button>
      {disCount && (
        <Button onClick={handleDisDelete} sx={{ color: "red" }}>
          {text}
          <DeleteIcon></DeleteIcon>
        </Button>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          mt: 2,
          p: 2,
          borderBottom: "1px solid #fff",
        }}
      >
        <Typography>Subtotal</Typography>
        <Typography>${finalTotal}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          mt: 1,
          p: 2,
          borderBottom: "1px solid #fff",
        }}
      >
        <Typography>Vat</Typography>
        <Typography>${vat}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",

          p: 2,
        }}
      >
        <Typography>Total</Typography>
        <Typography>${disCount ? disCountPrice : total}</Typography>
      </Box>
      <Button variant="contained" sx={{ width: "100%" }}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/checkout">
          {" "}
          Proceed to Checkout
        </Link>
      </Button>
    </Box>
  );
}

export default Cart;
