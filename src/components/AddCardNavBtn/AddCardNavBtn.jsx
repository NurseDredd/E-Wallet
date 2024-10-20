import React from 'react';
import { Link } from "react-router-dom";

const AddCardNavBtn = () => {
  return (
    <div style = {{height:'6rem'}}>
      <button style = {{marginTop:'2rem'}}><Link to="/addcard" className="addRouteBtn">Add new card</Link></button>
    </div>
  );
}

export default AddCardNavBtn;