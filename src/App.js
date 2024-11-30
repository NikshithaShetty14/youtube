import React, { useState } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Main from "./Main";
import './App.css';

 export default function App() {
  const [toggleButton, setToggleButton] = useState(false);

  const toggleToToggle = ()=> {
    setToggleButton(!toggleButton);
  }

  return (
    <div className="container">
      <Header onToggle={toggleToToggle}/>
      <div className="box">
        {/* {toggleButton.toString()} */}
          <Sidenav toggleEffect={toggleButton}/>
          <Main/>
        </div>
    </div>
  );
}


