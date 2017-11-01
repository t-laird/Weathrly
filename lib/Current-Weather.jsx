import '../Styles/Current-Weather.scss';
import React, { Component } from 'react';
import Card from './Card';
import key from '../apiKey';


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
    const { location, observationLoc, temp, tempNum, currWeather, feelsLike, high, low, windDegs, windDir, windSpeed } = this.props.currentWeather;
    console.log(this.props.currentWeather);
      return (
        <div className="CurrentWeather">
          <h1> {location} </h1>
          <h1> Weather Today: {temp}</h1>
          <p>
            {currWeather} <br />
            {feelsLike} <br />
            {high} <br />
            {low} <br />
            {windDegs} <br />
            {windDir} <br />
            {windSpeed} <br />




          </p>
          {/* <h2> Current Conditions: {this.state.apiData.conditions}</h2>
          <h2> Temperature: {this.state.apiData.temp}˚</h2>
          <h2> Location: {this.state.apiData.location.full}</h2> */}
        </div>
      )
  }
}

export default CurrentWeather;
