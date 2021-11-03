import { useState } from "react";
import {workdata} from '../../data'
import Roll from 'react-reveal/Roll';
import "./works.scss";


export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < workdata.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
         style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {workdata.map((d) => (
            <div className="container" 
              key = {d.title}>          
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={d.icon} alt="" />
                      </div>
                      <h2>{d.title}</h2>
                      <p>{d.desc}</p>
                      <span>Projects</span>
                      <a href = {`https://github.com/zawztun${d.name}`} style ={{textDecoration:"none", color:" #cfce78"}}>Source-Code</a>
                    </div>
                  </div>
                  <div className="right">   
                  <Roll>
                    <img src={d.img}alt=""/>  
                  </Roll>              
                  </div>
                </div>
            </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
