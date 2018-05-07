import React, { Component } from "react";

class Home extends Component {
  render() {
    var tempRounded = Math.floor((this.props.weather.temp - 272.15) * 10) / 10
    return (
      <div  className="text-center box">
        <h1>Welcome to my portfolio</h1>
        <p>I am so glad you are taking your time to visit my portfolio</p>
        <br />
        <p>I hope you find something interesting here and if you do I hope we can talk more about it</p>
        <p>Have a great day and have fun looking around</p>
        <br />
        <br />
        <br />
        <p>The weather in Stockholm right now is: {tempRounded}°C <br /></p>
        <small>Used openweathermap API for weather information</small>
        </div>
    );
  }
}

export default Home;
