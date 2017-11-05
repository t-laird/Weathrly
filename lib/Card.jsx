import '../Styles/Card.scss';
import React from 'react';


export default class Card extends React.Component {
  constructor () {
    super ();

  }

  render () {
  
    return (
      <div className="Card">
        {this.props.weather.high &&
          <div> 
          <h1 className="ten-day-day">{this.props.weather.day} </h1>
          <img className="ten-day-icon" src={this.props.weather.icon_url} />
          <div className="ten-day-condition"> {this.props.weather.condition} </div>
          <hr></hr>
          <div className="ten-day-temp-wrap">
          <div className="ten-day-temp-high"> {this.props.weather.high}˚ </div>
          <div className="ten-day-temp-low"> {this.props.weather.low}˚ </div>
          </div>
          <div className="ten-day-humid-wrap">
          <div className="ten-day-humid-high"> Humid {this.props.weather.maxHumid}% </div>
          <div className="ten-day-humid-low"> {this.props.weather.minHumid}% </div>
          </div>
          <div className="ten-day-wind-wrap">
          <div className="ten-day-wind-speed"> Wind {this.props.weather.maxWind}mph</div>
          <div className="ten-day-wind-direction"> {this.props.weather.windDirection}</div>
          </div>
          </div>
        }
        {!this.props.weather.high &&
          <div>
          <h1 className="seven-hour-hour">{this.props.weather.hour} </h1>
          <img className="seven-hour-icon" src={this.props.weather.icon_url} />
          <div className="seven-hour-temp"> {this.props.weather.temp}˚ </div>         
          <hr></hr>
          <div className="wind-style">
          <div className="seven-hour-wind-speed"> {this.props.weather.windSpeed}mph </div>
          <div className="seven-hour-wind-direction"> {this.props.weather.windDirection} </div>          
          </div>
          <div className="seven-hour-humidity"> {this.props.weather.humidity}% Humidity </div>
          </div>
        }
      </div>
    )
  }
}

