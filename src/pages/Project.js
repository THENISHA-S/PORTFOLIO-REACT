import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";
import Darkweb from "../assets/darkweb.jpg";
import Deftpatrol from "../assets/deftpatrol.jpg";

// import { projectList } from "../helpers/ProjectList";

const Project = () => {
    return (
        <div className="projects">
            <h1>My personal Projects</h1>
            <div className="projectList">
                <ProjectItem name="Dark Web Crawling" image={Darkweb} />
                <ProjectItem name="Deft Patrol crawling" image={Deftpatrol} />
            </div>

        </div>
    );
}

export default Project;





