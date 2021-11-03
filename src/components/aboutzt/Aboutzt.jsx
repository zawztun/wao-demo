import "./aboutzt.scss";
import { init } from "ityped";
import Fade from 'react-reveal/Fade';
import { useEffect, useRef } from "react";

export default function Aboutzt() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: [ " I'm Web Developer ", " I'm FrontEnd UI/UX Developer ", " I'm Blogger " ],
    });
  }, []);

  return (
    <div className="aboutzt" id="aboutzt">
        <div className="left">
            {/* <div className="imgContainer">
              <img src="assets/zawtun.png"
               alt="" />
            </div> */}
        </div>
        <div className="right">
            <div className="wrapper">       
                <h2>Hi There, I'm </h2>
              <Fade left>
                <h1>Zaw Tun</h1>
              </Fade>
                <h3> 
                    <span ref={textRef}></span>
                </h3>
            </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  );
}
