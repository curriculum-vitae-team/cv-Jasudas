import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h1>Header</h1>

      <ul>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </div>
  );
};
