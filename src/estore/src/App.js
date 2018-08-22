import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import ProductList from './components/ProductList.js';
import AddProduct from './components/AddProduct.js';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';

/*  This can be produced using Babel.js
class App extends Component {
  render() {
    return React.createElement(
      "div",
      { className: "App" },
      React.createElement(
        "header",
        { className: "App-header" },
        React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
        React.createElement(
          "h1",
          { className: "App-title" },
          "Welcome to React"
        )
      ),
      React.createElement(
        "p",
        { className: "App-intro" },
        "To get started, edit ",
        React.createElement(
          "code",
          null,
          "src/App.js"
        ),
        " and save to reload."
      )
    );
  }
}

export default App;
*/

//{expression} anything can go in here.
//use className as the class attribute because class is a keyword in JS
class App extends Component {
  getTitle() {
    return "Welcome to React - from method";
  }
  render() {
    //const message = "Welcome to React";
    return (
      <div className="App">
        <Header siteTitle="Welcome to React!" subTitle="I am a sub-title" />
        <NavBar />
        <Route exact={true} path="/products" component={ProductList} />
        <Route path="/products/new" component={AddProduct} />

        {/*<AddProduct/>*/}
        {/*<ProductList />*/}
        
        {/*<header className="App-header">
            <img 
              src={logo} 
              className="App-logo" 
              alt="logo" />
            <h1 
              className="App-title">{message.toUpperCase()}</h1>
            <h1 
              className="App-title" 
              title="this is a tooltip from react" 
              style={{ backgroundColor: "yellow", color: "red" }}>{this.getTitle()}</h1>
            <h1 
              className="App-title">{message !== undefined ? message : "no message"}</h1>
            <h5>{new Date().toISOString()}</h5>
        </header>*/}
          {/*<p 
            className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>*/}        
      </div>
    );
  }
}

export default App;