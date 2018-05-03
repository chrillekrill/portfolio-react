import React, { Component } from 'react'
import background from './header2.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Home from "./home"
import Contact from "./contact"
import AboutMe from "./about-me"
import MyWork from "./my-work"
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec"
const COMMENT_API = 'http://localhost:3306/comment'

var sectionStyle = {
  width: "100%",
  backgroundSize: 'cover',
  backgroundImage: "url(" + background + ")"
};

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    weather: {
      temp: '',
      pressure: '',
      humidity: '',
      temp_min: '',
      temp_max: ''
    },
    comment: []
  }

}
fetching() {
  fetch(COMMENT_API)
        .then(response => response.json())
        .then(data => this.setState({ comment: data }))
  fetch(weatherAPI)
        .then(response => response.json())
        .then(data => this.setState({ weather: data.main}))
}
  componentDidMount() {
    this.fetching()
  }
  componentDidUpdate(){
    this.fetching()
  }

  render() {
    return (
      <HashRouter>
      <div className="App">
        <div className="App-header text-center"  style={sectionStyle}>
          <h1 className="App-title">Christoffer Korell</h1>
          <h2 className="App-not-title">Front End Developer</h2>
          <h2 className="App-not-title">Portfolio</h2>
          <div className="Header-content">
          <NavLink to="/"><button className="btn-success buttons">Home</button></NavLink>
          <NavLink to="/aboutMe"><button className="btn-success buttons">About me</button></NavLink>
          <NavLink to="/myWork"><button className="btn-success buttons">My work</button></NavLink>
          <NavLink to="/contact"><button className="btn-success buttons">Contact me</button></NavLink>
          </div>
        </div>
        <div className="content">
        <Route exact path="/" render={() => <Home weather={this.state.weather}/>}/>
        <Route path="/myWork" render={() => <MyWork weather={this.state.weather}/>}/>
        <Route path="/contact" render={() => <Contact weather={this.state.weather} comments={this.state.comment} fetching={this.fetching}/>}/>
        <Route path="/aboutMe" render={() => <AboutMe weather={this.state.weather}/>}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
