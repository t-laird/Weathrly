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

  componentWillMount() {
    fetch(`http://api.wunderground.com/api/${key}/conditions/q/CO/Denver.json`)
      .then(res => res.json())
      .then(data => {
        let dataObj = {location: data.current_observation.display_location, conditions: data.current_observation.weather, temp: data.current_observation.temp_f};
        console.log(dataObj);
        this.setState({ apiData: dataObj });
        console.log(this.state);
      });
  }




  render() {
    // this.getWeather();
    if (this.state.apiData !== undefined){
      return (
        <div className="CurrentWeather">
          <h1> Today/'s Weather:</h1>
          <h2> Current Conditions: {this.state.apiData.conditions}</h2>
          <h2> Temperature: {this.state.apiData.temp}˚</h2>
          <h2> Location: {this.state.apiData.location.full}</h2>
        </div>
      )
    }
    return null;
  }
}

export default CurrentWeather;
