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
        <h1>{this.props.weather.hour} </h1>
        <h1>{this.props.weather.day} </h1>
        <img src={this.props.weather.icon_url} />
        <div> {this.props.weather.condition} </div>
        {this.props.weather.high &&
          <div> 
          <div>High of  {this.props.weather.high}˚ </div>
          <div>Low of  {this.props.weather.low}˚ </div>
          <div>Min Humidity {this.props.weather.minHumid}% </div>
          <div>Max Humidity {this.props.weather.maxHumid}% </div>
          </div>
        }
        {!this.props.weather.high &&
          <div>
          <div>Temp {this.props.weather.temp}˚ </div>         
          <div>Humidity {this.props.weather.humidity}% </div>
          </div>
        }
        <div>Wind {this.props.weather.windDirection} </div>
      </div>
    )
  }
}

