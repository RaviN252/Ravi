import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import fav from "../Assets/favicon.png";

function Nav() {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" id="navli">
          <img src={fav} alt="" id="fav" />
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMenuopen(!menuopen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuopen ? "open" : ""}>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>

          <li>
            <NavLink to="/Resume">Resume</NavLink>
          </li>

          <li>
            <NavLink to="/Proj">Project</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Conatct</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
