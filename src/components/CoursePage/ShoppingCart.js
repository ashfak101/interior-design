import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import React, { useContext } from "react";
import CartItem from "./CartItem";

function ShoppingCart({ finalTotal, setFinalTotal }) {
  const [cart] = useContext(DataContext);
  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          ShoppingCart
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell> Course Name</TableCell>
                <TableCell> Price</TableCell>
                <TableCell> Quantity</TableCell>
                <TableCell> Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.map((cd) => (
                <CartItem
                  key={cd.id}
                  finalTotal={finalTotal}
                  setFinalTotal={setFinalTotal}
                  cd={cd}
                ></CartItem>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default ShoppingCart;
