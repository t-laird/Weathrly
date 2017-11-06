import '../Styles/10-Day-Forecast.scss';
import React, { Component } from 'react';
import Card from './Card';

class TenDayForecast extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="TenDay">
        <div className="ten-day-container-title">10 Day Forecast</div>
        <div className="card-container">
        {
          this.props.tenDay.map((day, index) => {
            return (
              <Card weather={day} key={index} />
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default TenDayForecast;
