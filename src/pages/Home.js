import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";

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

            <div className="sills">
                <div className="skills_container">
                    <div className="left">
                        <div>
                            <h1>Programming</h1>
                            <p>C language</p>
                            <p>C++ language</p>
                        </div>
                        <div>
                            <h1>FrontEnd</h1>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                            <p>Raect js</p>
                        </div>
                        <div>
                            <h1>BackEnd</h1>
                            <p>Mysql</p>
                            <p>Node js</p>
                        </div>
                    </div>
                    <div className="right">
                      <div>
                        <h1>Area of Interest</h1>
                        <p>DBMS</p>
                        <p>OS</p>
                        <p>Networking</p>
                      </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Home