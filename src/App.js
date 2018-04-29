import React, { Component } from 'react'
import background from './header2.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import home from "./home"
import contact from "./contact"
import aboutMe from "./about-me"
import myWork from "./my-work"

var sectionStyle = {
  width: "100%",
  backgroundSize: 'cover',
  backgroundImage: "url(" + background + ")"
};

class App extends Component {

  render() {
    return (
      <HashRouter>
      <div className="App">
        <div className="App-header text-center"  style={sectionStyle}>
          <h1 className="App-title">Christoffer Korell</h1>
          <h2 className="App-not-title">Front End Developer</h2>
          <h2 className="App-not-title">Portfolio</h2>
          <div className="Header-content">
          <button className="btn-success buttons"><NavLink to="/contact">Contact me</NavLink></button>
          <button className="btn-success buttons"><NavLink to="/myWork">My work</NavLink></button>
          <button className="btn-success buttons"><NavLink to="/aboutMe">About me</NavLink></button>
          <button className="btn-success buttons"><NavLink to="/">Home</NavLink></button>
          </div>
        </div>
        <div className="content">
        <Route exact path="/" component={home}/>
        <Route path="/myWork" component={myWork}/>
        <Route path="/contact" component={contact}/>
        <Route path="/aboutMe" component={aboutMe}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
