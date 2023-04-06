import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
// import {RiContactsFill} from "react-icons/ri";
// import {MdEmail} from "react-icons/md";
// import {BsFillCCircleFill} from "react-icons/bs";


const Home = () =>{
    return(
        <div className="home">
            <div className="about">
                <h2><i>
                <Typewriter
                   onInit={(typewriter)=>{
                    typewriter
                    .typeString("Hi I'm Thenisha S")
                    .start();
                   }}  
                />
                </i>
                </h2>
                <h4 className="prompt"><em>An independent and self motivated student
                     with a passion for learning and developing.</em></h4>

            </div>
               

            <div className="skills">
                <h1><i>SKILLS</i></h1>
                <div className="list">
                   <h1><i>Front-End</i></h1>
                   <div>
                       <li>
                        <ul>
                            <h4>Html</h4>
                            <h4>Css</h4>
                            <h4>Javascript</h4>
                            <h4>React</h4>
                        </ul>
                       </li>
                   </div>
                </div>
                <div className="list">
                   <h1><i>Back-End</i></h1>
                   <div>
                        <li>
                            <ul>
                                <h4>Mysql</h4>
                            </ul>
                        </li>
                   </div>
                </div>
                <div className="list">
                   <h1><i>Programming</i></h1>
                   <div>
                        <li>
                            <ul>
                                <h4>C language</h4>
                                <h4>C++ language</h4>
                            </ul>
                        </li>
                   </div>
                </div>
                <div className="list">
                   <h1><i>Area of Interest</i></h1>
                   <div>
                        <li>
                            <ul>
                                <h4>DataBase Management System</h4>
                                <h4>Operating System</h4>
                                <h4>Networking</h4>
                            </ul>
                        </li>
                   </div>
                </div>
            </div>
        </div> 
    )
}

export default Home