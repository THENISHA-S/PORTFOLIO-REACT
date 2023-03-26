import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import {RiContactsFill} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import {BsFillCCircleFill} from "react-icons/bs";
import {IoLogoHtml5} from "react-icons/io";
import {IoLogoJavascript} from "react-icons/io"; 
import {IoLogoCss3} from "react-icons/io";
import {IoLogoNodejs} from "react-icons/io";
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
                <h1>SKILLS</h1>
                <ol className="list">
                <li className="item">
                    <h1>Programming</h1>
                    <span><BsFillCCircleFill size="60px"/>
                          </span>
                    
                    
                </li>
                <li className="item">
                    <h1>Front-End</h1>
                    <span><IoLogoHtml5 size="60px"/>
                    <IoLogoCss3 size="60px"/>
                    <IoLogoJavascript size="60px"/></span>
                </li>
                <li className="item">
                    <h1>Back-End</h1>
                    <span><IoLogoNodejs size="60px"/></span>
                </li>
                </ol>
                </div>
        </div> 
    )
}

export default Home