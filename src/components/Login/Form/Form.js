import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Form({ open, handleClose }) {
  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      sx={{ background: "rgba(0,0,0,0.8)" }}
    >
      <Box sx={{ ...style, width: 200 }}>
        <Box sx={{ textAlign: "right" }}>
          <Button sx onClick={handleClose}>
            X
          </Button>
        </Box>
        <h2 id="child-modal-title">Text in a child modal</h2>
        <p id="child-modal-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </Box>
    </Modal>
  );
}
