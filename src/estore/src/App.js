import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import ProductList from './components/ProductList.js';
import AddProduct from './components/AddProduct.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import Login from './components/Login';

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

  constructor(props) {
    super(props);
    this.state = {isAdmin: false}
  }
  getTitle() {
    return "Welcome to React - from method";
  }
  render() {
    //const message = "Welcome to React";
    return (
      <div className="App">
        <Header siteTitle="Welcome to React!" subTitle="I am a sub-title" />
        <NavBar />
        <button onClick={() => this.setState({ isAdmin: !this.state.isAdmin })}>Toggle Admin</button>
        <Switch>
          <Route 
            exact={true} 
            path="/products" 
            render={props => <ProductList {...props} additionalProp="test" />} 
          />
          <Route 
            path="/products/new" 
            render={props => { 
              return (this.state.isAdmin ? <AddProduct/> : <Redirect to="/login" /> )
            }}  
          />
          <Route exact path="/products/:productId" component={ProductDetail} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>

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