import '../Styles/Current-Weather.scss';
import React, { Component } from 'react';
import Card from './Card';

class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props.currentWeather)
    let { location, observationLoc, temp, tempNum, currWeather, feelsLike, high, low, windDegs, windDir, windSpeed, observationTime, sentence, icon} = this.props.currentWeather;
    icon = `wi wi-wu-${icon.replace(/\s/g, '')}`;
    console.log(icon);
      return (
        <div className="CurrentWeather">
          <div className="leftHalf">
            <h1>{location}</h1>
            <h4>{observationTime}</h4>
            <div>
              <i className={icon}></i>
              <h1>{tempNum}˚</h1>
            </div>
            <p className = "wind">
              Wind {windDir} - {windSpeed} mph 
              <i className={"wi wi-wind towards-"+windDegs+"-deg"}></i>
            </p>
          </div>
          <div className="divider">

          </div>
          <div className="rightHalf">
            <h3>TODAY:</h3>
              <span className="high">{high}˚</span> <span className="low">{low}˚</span>
            <p>
              {sentence}
            </p>
          </div>  
        </div>
      )
  }
}

export default CurrentWeather;
