import '../Styles/10-Day-Forecast.scss';
import React, { Component } from 'react';

class TenDayForecast extends Component {
  constructor() {
    super();
  }

  render() {

    return (

      <div className="TenDay">
        {this.props.tenDay.map((day, index) => {
          return (
            <Card dayWeather={day} key={index} />
          )
        })
      }
      </div>
    )
  }
}

export default TenDayForecast;

  // render () {
  //   return (
  //     <div className="card" onClick={ this.toggleQA } >
  //     <div className="index"> {this.props.index} </div>
  //       { 
  //         this.state.showQuestion && 
  //         <div className="question"> 
  //           Question: {this.props.question} 
  //         </div>
  //       }

  //       {
  //         !this.state.showQuestion && 
  //         <div className="answer">
  //           Answer: {this.props.answer}
  //         </div>
  //       }
  //     </div>
  //   )
  // }