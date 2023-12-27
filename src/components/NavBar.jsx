import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
      <nav className="selected navBar">
        <Link className="link1" to="/all">
          All
        </Link>
        <Link className="link1" to="/fullstackdevelopment">
          FullStackDevelopment
        </Link>
        <Link className="link1" to="/datascience">
          DataScience
        </Link>
        <Link className="link1" to="/cybersecurity">
          cybersecurity
        </Link>
        <Link className="link1" to="/carrer">
          Carrer
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
