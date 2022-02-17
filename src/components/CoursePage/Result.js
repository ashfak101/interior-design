import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
export default function Result() {
  const { location } = useLocation();
  const { state } = location;

  const { quiz } = state;
  console.log(location);
  return (
    <>
      <h3>herhdtfhbthrtgh</h3>
    </>
  );
}
