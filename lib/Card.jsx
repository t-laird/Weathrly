import '../Styles/Card.scss';
import React from 'react';


export default class Card extends React.Component {
  constructor () {
    super ();

  }

  render () {
  
    // console.log(this.props.weather)

    return (
      <div className="Card">
        {this.props.weather.high &&
          <div> 
          <h1>{this.props.weather.day} </h1>
          <img src={this.props.weather.icon_url} />
          <div> {this.props.weather.condition} </div>
          <div>High of  {this.props.weather.high}˚ </div>
          <div>Low of  {this.props.weather.low}˚ </div>
          <div>Min Humidity {this.props.weather.minHumid}% </div>
          <div>Max Humidity {this.props.weather.maxHumid}% </div>
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

