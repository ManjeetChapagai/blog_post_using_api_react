import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/posts">
          <li> Posts </li>
        </Link>
        <Link style={navStyle} to="/users">
          <li> Users </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
