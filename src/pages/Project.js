import React from "react";
import "../styles/Project.css";
import Darkweb from "../assets/darkweb.jpg";
import Deftpatrol from "../assets/deftpatrol.jpg";
import {NavLink} from "react-router-dom";

const Project = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={Deftpatrol} alt=""/>
                    <h2 className="project-title">Deft Patrol Application</h2>
                    <div className="pro-details">
                        <p>This is a text</p>
                        <div className="pro-btns">
                           <NavLink to="url.com" className="btn">View</NavLink>
                           <NavLink to="url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-card">
                    <img src={Darkweb} alt="image"/>
                    <h2 className="project-title">Darkweb Crawling</h2>
                    <div className="pro-details">
                        <p>This is a text</p>
                        <div className="pro-btns">
                           <NavLink to="url.com" className="btn">View</NavLink>
                           <NavLink to="url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;





