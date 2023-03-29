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
                <h1><i>TECHNOLOGIES</i></h1>
                <div className="list">
                   <h1><i>Front-End</i></h1>
                   <div>
                    <img className="picture" src="https://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-details.png" alt=""/>
                    {/* <img className="picture"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/> */}
                   </div>
                </div>
                <div className="list">
                   <h1><i>Back-End</i></h1>
                </div>
            </div>
             {/* <div className="skills">
                <h1><i>TECHNOLOGIES</i></h1>
                <ol className="list">
                 <li className="item">
                    <h1>Programming</h1>
                    <span><BsFillCCircleFill size="60px"/>
                          </span>
                    
    
                </li> 
                <li className="item">
                    <h1><em>Front-End</em></h1>
                    <span><IoLogoHtml5 size="60px"/>
                    <IoLogoCss3 size="60px"/>
                    <IoLogoJavascript size="60px"/></span>
                </li>
                <li className="item">
                    <h1><em>Back-End</em></h1>
                    <span><IoLogoNodejs size="60px"/></span>
                </li>
                </ol>
                </div>  */}
        </div> 
    )
}

export default Home