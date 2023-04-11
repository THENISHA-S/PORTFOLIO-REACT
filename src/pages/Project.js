import React from "react";
import "../styles/Project.css";
import Darkweb from "../assets/darkweb.jpg";
import Deftpatrol from "../assets/123.png";

const Project = () => {
    return (
        <section id="portfolio">
           <h1>My recent Works</h1>
           <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item image">
                        <img src={Deftpatrol} alt=""></img>
                    </div>
                    <h2>Deftpatrol</h2>
                    <p>In our project, we had proposed a mobile application to increase the connectivity in 
                       between the police itself in a more efficient manner. Our mobile application consists 
                       of a primary model to spot the crime and inform the committed crime to all other police
                       officers whoever is using the application. Our mobile application also includes the 
                       patrol checking system for convenience purposes.</p>
                    <a href="https://github.com/thenisha009/DEFT-PATROL"><button>Github</button></a>
                </article>
                
               
                <article className="portfolio_item">
                    <div className="portfolio_item image">
                        <img src={Darkweb} alt=""></img>
                    </div>
                    <h2>Darkweb</h2>
                    <p>Developed a crawler focused on the Tor network, which searches, analyses, and
                       indexes websites containing drug patterns. The general objective of the work is to develop a search
                       engine that allows to search the sites with illegal content within the TOR network through crawlers
                       dedicated to search, identify, and index secret services, black markets and to improve the accuracy
                       of results of current search engines. </p>
                    <a href="https://github.com/thenisha009/CRAWLING-OF-DARKWEB" ><button>Github</button></a>
                </article>
           </div>
        </section>
);
}

export default Project;

