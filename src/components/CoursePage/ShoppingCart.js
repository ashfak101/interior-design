import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import React, { useContext } from "react";
import CartItem from "./CartItem";

function ShoppingCart({ cart, setCart }) {
  const [courses] = useContext(DataContext);
  console.log(cart);
  console.log(courses);
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
                <CartItem key={cd.id} cd={cd}></CartItem>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default ShoppingCart;
