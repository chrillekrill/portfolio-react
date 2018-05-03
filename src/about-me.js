import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    var tempRounded = Math.floor((this.props.weather.temp - 272.15) * 10) / 10
    return (
      <div className="d-flex flex-row">
      <div className="text-center box">
        <h1 className="font-weight-bold text-uppercase">about me</h1>
        <img src={require('./me.png')} className="picture round"/>
        <p>I am an aspiring front end developer that
        loves to learn new things. <br />
        Right now I am studying front end at KYH in Stockholm Sweden.
        <br /> Outside the computer I like playing the guitar even if it&#39;s
        just a hobby for myself. I also like solving my rubik&#39;s cube
      </p>
      </div>
      <p className="position-absolute">Weather in Stockholm: {tempRounded}°C</p>
      </div>
    );
  }
}

export default AboutMe;
