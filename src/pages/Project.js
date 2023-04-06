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
                        <p>In our project, we had proposed a mobile application to increase the connectivity in 
                           between the police itself in a more efficient manner. Our mobile application consists 
                           of a primary model to spot the crime and inform the committed crime to all other police
                           officers whoever is using the application. Our mobile application also includes the 
                           patrol checking system for convenience purposes.</p>
                        <div className="pro-btns">
                           <NavLink to="https://github.com/thenisha009/DEFT-PATROL" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-card">
                    <img src={Darkweb} alt="image"/>
                    <h2 className="project-title">Darkweb Crawling</h2>
                    <div className="pro-details">
                        <p>develop a crawler focused on the Tor network, which searches, analyses, and
                           indexes websites containing drug patterns. The general objective of the work is to develop a search
                           engine that allows to search the sites with illegal content within the TOR network through crawlers
                           dedicated to search, identify, and index secret services, black markets and to improve the accuracy
                           of results of current search engines. </p>
                        <div className="pro-btns">
                           <NavLink to="https://github.com/thenisha009/CRAWLING-OF-DARKWEB" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;





