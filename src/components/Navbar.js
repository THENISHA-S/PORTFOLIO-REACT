import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="toggleButton">
                <button></button>
            </div>
            <div className="links">
                <Link to="/">Hom</Link>
                <Link to="/project">project</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    );
}

export default Navbar;