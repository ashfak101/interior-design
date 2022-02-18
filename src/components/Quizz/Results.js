import React from 'react'
import { useLocation } from "react-router-dom";
import useData from '../Hooks/useData';
function Results() {
  
    const {res}=useData()
    console.log(res);
  return (
    <div>{res.length}</div>
  )
}

export default Results