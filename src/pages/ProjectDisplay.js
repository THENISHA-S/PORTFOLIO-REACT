import React  from "react";
import { useParams } from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";


const ProjectDisplay=()=>{
    const {id} = useParams();
    const projects = ProjectList[id]
    return(
        <div className="project">
            <h1>{projects.name}</h1>
            <img src={projects.image}/>
        
        </div>
    );
}

export default ProjectDisplay;