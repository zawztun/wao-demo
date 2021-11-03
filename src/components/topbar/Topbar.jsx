import "./topbar.scss";
import React,{useState} from "react";
import { motion } from "framer-motion";
import Slide from 'react-reveal/Slide';
import { Email, GitHub } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

export default function Topbar({ menuOpen, setMenuOpen }) {
   const [isActive, setIsActive] = useState(false)
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#aboutzt" className="logo">
          <span>
               <motion.div className="block"
                  onClick={() => setIsActive(!isActive)}
                          animate={{
                          rotate: isActive ? 90 : 360
                          }}
                >              
              <DeveloperModeIcon className = "icon" fontSize="large"/>  
              </motion.div>          
            </span>
          </a>
            <div className="itemContainer">
            <Slide right>
            <span>
              <a href = "https://github.com/zawztun">
              <GitHub className = "icon"/>
              </a>
            </span>
            </Slide>  
              <span>
              <a href = "mailto:zzt.nyc@gmail.com"> 
              <Email className="icon" /> 
              </a>
              </span>
            <Slide left>
            <span>
              <a href = "https://www.linkedin.com/in/zaw-tun-75bb52127/">
              <LinkedInIcon className = "icon"/>
              </a>
            </span>
            </Slide>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
