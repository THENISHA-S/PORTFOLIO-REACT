import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";
import Darkweb from "../assets/darkweb.jpg";
import Deftpatrol from "../assets/deftpatrol.jpg";
import {BsGithub} from "react-icons/bs";

const Project = () => {
    return (
        <div className="projects">
            <h1>My personal Projects</h1>
            <div className="projectList">
                <div>
                <ProjectItem name="Dark Web Crawling" image={Darkweb} skills="Skills:Python" />
                <BsGithub/>
                </div>
                <div>
                <ProjectItem name="Deft Patrol Application" image={Deftpatrol} skills="Skills: Android studio,Firebase,Java"/>

                </div>
                
                
            </div>
        </div>
    );
}

export default Project;





