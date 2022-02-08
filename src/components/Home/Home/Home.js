import React from "react";
import Form from "../../Login/Form/Form";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Header handleOpen={handleOpen} />
      <Banner />
      <Form open={open} handleClose={handleClose}></Form>
    </div>
  );
}
