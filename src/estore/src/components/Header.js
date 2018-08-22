import logo from "../logo.svg";
import React from "react";

//function Header(props) {
  function Header({siteTitle, subTitle}) {
    return (
        <header className="App-header">
          <img 
            src={logo} 
            className="App-logo" 
            alt="logo" />
          <h1 
            className="App-title" 
            title="this is a tooltip from react" 
            style={{ backgroundColor: "yellow", color: "red" }}>
            {/*{props.siteTitle}*/}
            {siteTitle}
          </h1>
          <h2>
            {/*{props.subTitle}*/}
            {subTitle}
          </h2>
          <h5>{new Date().toISOString()}</h5>
        </header>
    )
}

//without this it will be private and inaccessible to other modules.
export default Header;