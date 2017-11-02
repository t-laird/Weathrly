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
      {this.props.sevenHour.map(hour => {
        console.log('Hello');
        return (
        <Card hourWeather={hour} />
        )
      })
      }
      </div>
    )
  }
}


export default SevenHourForecast;

