import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const liStyles = {
    marginLeft: 20,
    fontSize: 25,

    /* Add more custom styles here as needed */
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Cricket Stats
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={liStyles}>
                <Link className="nav-link" to="/test">
                  Test
                </Link>
              </li>
              <li className="nav-item" style={liStyles}>
                <Link className="nav-link" to="/odi">
                  ODI
                </Link>
              </li>
              <li className="nav-item" style={liStyles}>
                <Link className="nav-link" to="/t20">
                  T20s
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// git init
// git add 
// git commit-m "fisrt commit"
// git branch -M main 
// git remote add origin <url>
// git push -u origin main