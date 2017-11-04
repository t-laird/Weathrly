import '../Styles/Card.scss';
import React from 'react';


export default class Card extends React.Component {
  constructor () {
    super ();

  }

  render () {
  
    console.log(this.props.weather)

    return (
      <div className="Card">
        <h1>Hour {this.props.weather.hour} </h1>
        <h1>{this.props.weather.day} </h1>
        <img src={this.props.weather.icon_url} />
        <div> {this.props.weather.condition} </div>
        <div>High Temp {this.props.weather.high}˚ </div>
        <div>Low Temp {this.props.weather.low}˚ </div>
        <div>Humidity {this.props.weather.humidity}% </div>
        <div>Wind Direction {this.props.weather.windDirection} </div>
      {/*
        <div>Wind Speed {this.props.weather.windSpeed} </div>
      */}
      </div>
    )
  }
}

