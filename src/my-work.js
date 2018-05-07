import React, { Component } from "react";


class MyWork extends Component {
  render() {
    var tempRounded = Math.floor((this.props.weather.temp - 272.15) * 10) / 10
    var githuburl = "https://github.com/chrillekrill"
    return (
      <div className="d-flex flex-row">
      <div className="text-center box">
      <h1 className="font-weight-bold text-uppercase mt-4">My work</h1>
      <p>I have studied Java before I started studying front end. Back when I did that I made a quiz program
     for someone who studies to become an electrician. So I have knowledge from more than one programming languange</p>
     <br />
     <p>Here are two sample pictures of the quiz I made</p>
     <img src={require('./Pictures/quizstart.png')} className="picture" alt="Picture of my quiz game at the start of the game"/>
     <img src={require('./Pictures/quizquestion.png')} className="picture" alt="Picture of the first question in my quiz game"/>
     <p>I&#39;ve also made a google maps game together with five other people in our second project out of three, here is two sample pictures from that</p>
     <img src={require('./Pictures/ag.png')} className="picture img-width" alt="Picture of a google maps game"/>
     <img src={require('./Pictures/agcode.png')} className="picture img-width" alt="Some code of the google maps game"/>
     <p>I also have a react code snippet that I am proud of</p>
     <img src={require('./Pictures/reactexample.png')} className="picture img-width" alt="Code example of react.js that I wrote"/>
     <p>You can see more about my work on my github, even the code for this portfolio because I love open source ;)</p>
     <a href="https://github.com/chrillekrill"><p>{githuburl}</p></a>
      </div>
      <p className="position-absolute">Weather in Stockholm: {tempRounded}°C</p>
      </div>
    );
  }
}

export default MyWork;
