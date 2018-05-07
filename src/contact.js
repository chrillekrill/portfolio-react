import React, { Component } from "react"


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {message: '',
                  author: '',
                  time: ''
  }
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
    this.handleChangeComment = this.handleChangeComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChangeAuthor(event) {
    this.setState({author: event.target.value})
  }
  handleChangeComment(event) {
    this.setState({message: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.getTime()
    this.sendComment()
    this.setState({author: '',
                  message: '',
                  })
  }
  getTime(){
    var d = new Date()
    var b = d.toString()
    this.setState({time: b})
    console.log(b)
  }
  sendComment() {
    fetch('https://korell-portfolio.herokuapp.com/comment',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({author: this.state.author, body: this.state.message})
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })

  }
  render() {
    var tempRounded = Math.floor((this.props.weather.temp - 272.15) * 10) / 10
    return (
      <div className="d-flex flex-row">
      <div className="text-center box">
      <h4 className="mt-4">Christoffer Korell <br />
    Phone: 08-723255846 <br />
    Email:   <a href="mailto:christoffer.korell@student.kyh.se">christoffer.korell@student.kyh.se</a><br /><br /><br />
    I would gladly hear from you if you have any further questions,
    so don&#39;t hesitate to contact me, through mail or put up a message here with your contact info.
    </h4>
    <div className="d-flex justify-content-left ml-2">
    <form className="input d-flex flex-column" onSubmit={this.handleSubmit.bind(this)}>
    <input className="input-field mb-2" type="text" ref="msg" placeholder="Your Name..." value={this.state.author} onChange={this.handleChangeAuthor}/>
    <textarea className="input-field mb-2 mobile" type="text" ref="msg" placeholder="Ask Me Anything..." value={this.state.message} onChange={this.handleChangeComment}/>
    <input className="button mb-3" type="submit" value="Send"/>
    </form>
    </div>
    <div className="d-flex flex-column-reverse">
      {this.props.comments.map((com, key) => (
        <div key={key} className="guestbook mb-1">
        <h5 className="text-left ml-1">{com.author} Posted:</h5>
        <p className="text-left ml-2">{com.body}</p>
        <small>{com.time}</small>
        </div>
      ))}
      </div>
      <br />
      </div>
      <p className="position-absolute">Weather in Stockholm: {tempRounded}°C</p>
      </div>
    );
  }
}

export default Contact;
