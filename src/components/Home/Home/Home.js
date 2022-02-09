import React, { useState } from "react";

import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
    setIsClick(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <Header handleOpen={handleOpen} handleOpen2={handleOpen2} />
      <Banner />
      <Login open={open} handleClose={handleClose} handleOpen2={handleOpen2} />
      <Register
        open2={open2}
        handleClose2={handleClose2}
        handleOpen={handleOpen}
        isClick={isClick}
      />
    </div>
  );
}
