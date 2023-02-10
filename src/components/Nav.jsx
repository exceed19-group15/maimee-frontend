import React from "react";
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-content no-bullets">
        <Link to="/">
        </Link>
        <li>
          <Button name="Login" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
