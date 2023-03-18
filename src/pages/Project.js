import React from "react";
import ProjectItem from "../components/Projectitem";
import "../styles/projects.css";
import { ProjectList } from "../helpers/ProjectList";
import ProjectDisplay from "./projectDisplay";
const Project = () =>{
    return(
        <div className="project">
            <h1>My personal projects</h1>
            <div className="projectList"></div>
            {ProjectList.map((project)=>{
                return <ProjectItem name={project.name} image ={project.image}/> 
            })}
        </div>
    )
}

export default Project