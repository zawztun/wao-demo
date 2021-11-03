import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  designPortfolio,
  techPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("tech");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "UI/UX Design",
    },
    {
      id: "tech",
      title: "Tech",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "tech":
        setData(techPortfolio);
        break;
      default:
        setData(techPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects and Designs</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key = {item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            src= {item.src}
          />
        ))}
      </ul>
      <div  className="container">
        {data.map((d) => (
          <div className="item" 
              key = {d.title}
          >
            <img
              src={d.img}
              alt= " " 
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
