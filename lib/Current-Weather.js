import '../Styles/Current-Weather.scss';
import React, { Component } from 'react';
import Card from './Card';


class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {};
    // this.getWeather = this.getWeather.bind(this);
    // this.getWeather();
  }

  // componentWillMount() {
  //   fetch(`http://api.wunderground.com/api/${key}/conditions/q/CO/Denver.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       let dataObj = {location: data.current_observation.display_location, conditions: data.current_observation.weather, temp: data.current_observation.temp_f};
  //       console.log(dataObj);
  //       this.setState({ apiData: dataObj });
  //       console.log(this.state);
  //     });
  // }




  render() {
    const { location, observationLoc, temp, tempNum, currWeather, feelsLike, high, low, windDegs, windDir, windSpeed, observationTime, sentence} = this.props.currentWeather;
    console.log(this.props.currentWeather);
      return (
        <div className="CurrentWeather">
          <div className="weatherInfo">
            <h1>{location}</h1>
            <h2>{observationTime}</h2>
            <h3>Today's High: <span>{high}˚</span></h3> 
            <h3>Today's Low: <span>{low}˚</span></h3> 
          </div>
          <div className="temperature">
            <h1>{tempNum}˚</h1>
          </div>
          <div className="weatherIcon">
            
          </div>
          <div className="windInfo">
            {/* <div className="compass">
              <span>N</span>
              <span>E</span>
              <span>S</span>
              <span>W</span>
            </div> */}
            <p>
              Wind Direction: {windDir} <br />
              Wind Speed: {windSpeed} <br />
              Wind Angle:  {windDegs}              
            </p>
          </div>
          <div className="extraInfo">
            {sentence}

            {/* Today's weather is {currWeather} with a high of {high} and a low of {low} etc..... */}
          </div>

        </div>
      )
  }
}

export default CurrentWeather;
