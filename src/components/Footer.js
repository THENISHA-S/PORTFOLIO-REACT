import React from "react";
import "../styles/Footer.css";
import {BsGithub} from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer=()=>{
    return(
        <div className="footer">
            <a href={"https://github.com/THENISHA-S"}>
             <BsGithub className="logo-icon" style={{color:"#fff"}}/>
            </a>
            <a href={"https://www.linkedin.com/in/thenisha-s-431b89223/"}>
              <BsLinkedin className="logo-icon" style={{color:"#fff"}}/>
            </a>
            <a href="https://www.instagram.com/thenishasaravanan/">
              <BsInstagram className="logo-icon" style={{color:"#fff"}}/>
            </a>
            
        </div>
    )
}
export default Footer;