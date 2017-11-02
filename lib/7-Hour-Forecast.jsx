import '../Styles/7-Hour-Forecast.scss';
import React, { Component } from 'react';
import Card from './Card';


class SevenHourForecast extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {

    return (
      <div className="SevenHour">
      {this.props.sevenHour.map((hour, index) => {
        return (
        <Card hourWeather={hour} key={index} />
        )
      })
      }
      </div>
    )
  }
}


export default SevenHourForecast;

