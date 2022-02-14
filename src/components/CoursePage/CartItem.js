import { Box, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
function CartItem({ cd }) {
  let total = cd.quantity * cd.price;
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      {" "}
      <TableCell sx={{ display: "flex" }}>
        <img style={{ height: "50px", minWidth: "9px" }} src={cd.img} alt="" />
        {cd.courseName}
      </TableCell>{" "}
      <TableCell>{cd.price}</TableCell>{" "}
      <TableCell>
        <Box>
          <RemoveIcon />
          <TextField
            sx={{ width: "50px", height: "0.4375em" }}
            value={cd.quantity}
          />
          <AddCircleOutlineIcon />
        </Box>
      </TableCell>{" "}
      <TableCell>{total}$</TableCell>{" "}
    </TableRow>
  );
}

export default CartItem;
