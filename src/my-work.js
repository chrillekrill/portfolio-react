import React, { Component } from "react";


class MyWork extends Component {
  render() {
    var tempRounded = Math.floor((this.props.weather.temp - 272.15) * 10) / 10
    var githuburl = "https://github.com/chrillekrill"
    return (
      <div className="d-flex flex-row">
      <div className="text-center box">
      <h1 className="font-weight-bold text-uppercase">My work</h1>
      <p>I have studied Java before I started studying front end. Back when I did that I made a quiz program
     for someone who studies to become an electrician. So I have knowledge from more than one programming languange</p>
     <br />
     <p>Here are two sample pictures of the quiz I made</p>
     <img src={require('./quizstart.png')} className="picture"/>
     <img src={require('./quizquestion.png')} className="picture"/>
     <p>I&#39;ve also made a google maps game together with five other people in our second project out of three, here is two sample pictures from that</p>
     <img src={require('./ag.png')} className="picture img-width"/>
     <img src={require('./agcode.png')} className="picture img-width"/>
     <p>I also have a react code snippet that I am proud of</p>
     <img src={require('./reactexample.png')} className="picture"/>
     <p>You can see more about my work on my github, even the code for this portfolio because I love open source ;)</p>
     <a href="https://github.com/chrillekrill"><p>{githuburl}</p></a>
      </div>
      <p className="position-absolute">Weather in Stockholm: {tempRounded}°C</p>
      </div>
    );
  }
}

export default MyWork;
