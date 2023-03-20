import React from "react";
import { BsGithub } from "react-icons/bs";
const ProjectItem=({image,name})=>{
    return(
        <div className="projectItem">
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
        <h1>{name}</h1>
        <a href="https://github.com/THENISHA-S">
                <BsGithub className="git-icon" style={{color:"black"}}/>
                </a>
        </div>
    );
}

export default ProjectItem;