import '../Styles/Card.scss';
import React from 'react';

export default class Card extends React.Component {
  constructor () {
    super ();

  }
  render () {
    return (
      <div className="Card">
      <div className="index"> {this.props.index} </div>

        {
          this.props.sevenHour &&
          <span className="seven-hour-top-row">
            <h1 className="seven-hour-hour">
            {this.props.hourWeather.hour}</h1>
            <h1 className="seven-hour-day">
            {this.props.hourWeather.day}</h1>
          </span>
        }
        {
          !this.props.sevenHour &&
          <span className="ten-day-top-row">
            <h1 className="ten-day-week-day">
            {this.props.dayWeather.weekday}</h1>
            <h1 className="ten-day-month-day">
            {this.props.dayWeather.monthname_short}, {this.props.dayWeather.day}</h1>
          </span>
        }
          <p>
          <span className="seven-hour-icon"><img src={this.props.hourWeather.icon_url}>
            </img> </span> <br />
            <span className="seven-hour-condition">
            {this.props.hourWeather.condition} 
          </span><br />
          <span className="seven-hour-bottom-row">
            <span className="seven-hour-temp">
            Temp {this.props.hourWeather.temp.english}˚ </span> <br />
            <span className="seven-hour-wind-deg">
            Wind {this.props.hourWeather.windDirection.dir} at {this.props.hourWeather.windSpeed.english}mph </span> <br />
            <span className="seven-hour-wind-speed"></span> <br />
            <span className="seven-hour-humidity">
            Humidity {this.props.hourWeather.humidity}% </span> <br />
          </span>
          </p>
      </div>
    )
  }
}

