import React from "react";
import { Link, Router } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header
      <Link to="summary">Summary</Link>
      <Link to="detail">Detail</Link>
    </div>
  );
};
export default Header;
