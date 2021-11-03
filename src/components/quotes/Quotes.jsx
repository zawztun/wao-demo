
import "./quotes.scss";  
import {quotesdata} from '../../data';

export default function Quotes() {
  return (
    <div className="quotes" id="quotes">
      <h2>Precious Quotes </h2>
        <div className="container">
          {quotesdata.map((d) => (
            <div className={d.featured ? "card featured" : "card"} 
            key = {d.name}> 
              <div className="top">              
                <img
                  className="user"
                  src={d.img}
                  alt=""
                />              
              </div>
              <div className="center">
                {d.desc}
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>     
    </div>
  );
}
