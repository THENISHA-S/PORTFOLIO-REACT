import React from "react";
import "../styles/Footer.css";
import {BsGithub} from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {FaHome} from "react-icons/fa";

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

            <div className="footer-container">
              <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff",marginRight:"2rem"}}/>
                <div>
                  <p>2/168,Velagoundampatti,</p>
                  <p>Namakkal</p>
                 </div>
                </div>
                <div className="Phone">
                    <RiContactsFill size={20} style={{ color:"#fff",marginRight:"2rem"}}/>
                </div>
                <div>
                   <p>+91 9940870631</p>
                </div>
                <div className="mail">
                  <MdEmail size={20} style={{ color:"#fff",marginRight:"2rem"}} />
                </div>
                <div>
                  <p>thenishasaravanan2002@gmail.com</p>
                </div>
              </div>
            </div>




            {/* <div>
              <RiContactsFill size="30px"/>
            </div>
            <div>
              <p>+91 9940870631</p>
            </div>
            <div>
              <MdEmail size="30px"/>
            </div>
            <div>
              <p>thenishasaravanan2002@gmail.com</p>
            </div> */}
            
        </div>
    )
}
export default Footer;