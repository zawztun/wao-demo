import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Aboutzt from "./components/aboutzt/Aboutzt"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Menu from "./components/menu/Menu";
import Quotes from "./components/quotes/Quotes";
import "./app.scss"


function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
        <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Aboutzt/>
            <Portfolio/>
            <Works/>
            <Quotes/>   
         
        </div>
      </div>
  );
}

export default App
