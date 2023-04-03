import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import {RiContactsFill} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
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
               <RiContactsFill size="30px"/> <p>+91 9940870631</p>
               <MdEmail size="30px"/>
               <p>thenishasaravanan2002@gmail.com</p>

            </div>
               

            <div className="skills">
                <h1><i>SKILLS</i></h1>
                <div className="list">
                   <h1><i>Front-End</i></h1>
                   <div>
                       <li>
                        <ul>
                            <h3>Html</h3>
                            <h3>Css</h3>
                            <h3>Javascript</h3>
                            <h3>React</h3>
                        </ul>
                       </li>
                   </div>
                </div>
                <div className="list">
                   <h1><i>Back-End</i></h1>
                   <div>
                        <li>
                            <ul>
                                <h3>Mysql</h3>
                            </ul>
                        </li>
                   </div>
                </div>
                <div className="list">
                   <h1><i>Programming</i></h1>
                   <div>
                        <li>
                            <ul>
                                <h3>C language</h3>
                                <h3>C++ language</h3>
                            </ul>
                        </li>
                   </div>
                </div>
                <div className="list">
                   <h1><i>Area of Interest</i></h1>
                   <div>
                        <li>
                            <ul>
                                <h3>DataBase Management System</h3>
                                <h3>Operating System</h3>
                                <h3>Networking</h3>
                            </ul>
                        </li>
                   </div>
                </div>
            </div>
        </div> 
    )
}

export default Home