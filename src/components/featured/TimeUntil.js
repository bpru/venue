import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

export default class TimeUntil extends Component {

  state = {
    deadline: 'Feb 10 2019 16:00',
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  getTimeUntil = (deadline) => {
    const timeUntil = Date.parse(deadline)- Date.parse(new Date());
    if (timeUntil < 0) {
      console.log('event passed');
    } else {
      const seconds = Math.floor(timeUntil/1000)%60;
      const minutes = Math.floor(timeUntil/1000/60)%60;
      const hours = Math.floor(timeUntil/1000/60/60)%24;
      const days = Math.floor(timeUntil/1000/60/60/24);

      this.setState({days, hours, minutes, seconds}); 
    }
       
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.state.deadline);
    }, 1000);
  }
  

  render() {
    return (

      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">
            Event starts in
          </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">
                {this.state.days}
              </div>
              <div className="countdown_tag">
                Days
              </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {this.state.hours}
              </div>
              <div className="countdown_tag">
                Hrs
              </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {this.state.minutes}
              </div>
              <div className="countdown_tag">
                Mins
              </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {this.state.seconds}
              </div>
              <div className="countdown_tag">
                Secs
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
    )
  }
}
