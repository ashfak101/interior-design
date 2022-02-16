import { Box, TableCell, TableRow, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import { DataContext } from "../../context/DataProvider";
function CartItem({ cd, setFinalTotal }) {
  const [cart] = useContext(DataContext);
  const [quantity, setQuantity] = useState(cd.quantity);
  let total = cd.quantity * cd.price;

  const increaseQuantity = () => {
    setQuantity((cd.quantity += 1));
  };
  const decreaseQuantity = () => {
    if (cd.quantity > 1) {
      setQuantity((cd.quantity -= 1));
    }
  };
  let totalQuantity = 0;
  let allTotal = 0;
  for (const i of cart) {
    if (!i.quantity) {
      i.quantity = 1;
    } else {
      allTotal = allTotal + i.price * i.quantity;
      totalQuantity = totalQuantity + i.quantity;
    }
  }
  setFinalTotal(allTotal);
  console.log(quantity);
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      {" "}
      <TableCell sx={{ display: "flex" }}>
        <img style={{ height: "50px", minWidth: "9px" }} src={cd.img} alt="" />
        <Typography> {cd.courseName}</Typography>
      </TableCell>{" "}
      <TableCell>{cd.price}</TableCell>{" "}
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RemoveIcon onClick={decreaseQuantity} />

          <TextField
            id="outlined-basic"
            value={quantity}
            variant="outlined"
            sx={{ width: "50px", height: "50px", border: "none" }}
          />
          <AddCircleOutlineIcon onClick={increaseQuantity} />
        </Box>
      </TableCell>{" "}
      <TableCell>{total}$</TableCell>{" "}
    </TableRow>
  );
}

export default CartItem;
