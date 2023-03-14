import React from "react";
import "../styles/Home.css";

const Home = () =>{
    return(
        <div className="home">
            <div className="about">
               <h1><i>Hi!! I'm THENISHA S</i></h1>
               <div className="prompt">
                <h4>An independent and self-motivated student looking for an
                    entry-level position in the software company where I can
                    utilize the extensive knowledge I have gained during my
                    course. I am good at programming and problem solving.</h4>
               </div>
            </div>
            <div className="skills">
                <h1>SKILLS</h1>
                <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>HTML,CSS,Javascript,React js</span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>MySQL, Node js, MongoDB</span>
                </li>
                <li className="item">
                    <h2>Programming</h2>
                    <span>C,C++,Java</span>
                </li>
                </ol>
            </div>
        </div>
    )
}

export default Home