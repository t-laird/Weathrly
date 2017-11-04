import '../Styles/Current-Weather.scss';
import React, { Component } from 'react';
import Card from './Card';

class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { location, observationLoc, temp, tempNum, currWeather, feelsLike, high, low, windDegs, windDir, windSpeed, observationTime, sentence, icon} = this.props.currentWeather;
    icon = `wi wi-wu-${icon.replace(/\s/g, '')}`;
    console.log(icon);
      return (
        <div className="CurrentWeather">
          <div className="weatherInfo">
            <h1>{location}</h1>
            <h2>{observationTime}</h2>
            <h3>Today's High: <span>{high}˚</span></h3> 
            <h3>Today's Low: <span>{low}˚</span></h3> 
          </div>
          <div className="windInfo">
            <p>
              Wind Direction: {windDir} <br />
              Wind Speed: {windSpeed} <br />
              Wind Angle:  {windDegs}              
              </p>
            </div>  
          <div className="temperature">
            <h1>{tempNum}˚</h1>
          </div>
          <div className="weatherIcon">
           <i className={icon}></i>
          </div>
          <div className="extraInfo">
            {sentence}
          </div>
        </div>
      )
  }
}

export default CurrentWeather;
