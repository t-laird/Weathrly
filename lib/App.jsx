import '../Styles/App.scss';
import React, { Component } from 'react';
import SevenHourForecast from './7-Hour-Forecast';
import TenDayForecast from './10-Day-Forecast';
import CurrentWeather from './Current-Weather';
import Search from './Search';
import Welcome from './Welcome';
import key from '../apiKey';
import cleanData from './cleanData';

class App extends Component {
  constructor() {
    super();

    this.state = {};    
    this.updateLocation = this.updateLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation() {
    if (JSON.parse(localStorage.getItem('asdf'))) {
      let currentLocation = JSON.parse(localStorage.getItem('asdf'));
      let cityState = currentLocation.split(', ');
      
      // eslint-disable-next-line max-len
      fetch(`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/${cityState[1]}/${cityState[0]}.json`)
        .then(res => res.json())
        .then(data => {
          let apiData = data;
          const {
            CurrentObject, 
            sevenHourForecast, 
            tenDayObject
          } = cleanData(apiData);
          
          this.setState({
            currentLocation,
            CurrentObject,
            tenDayObject,
            sevenHourForecast
          });    
        });
    }
  }

  componentDidMount() {
    this.setLocation();
  }

  updateLocation(location) {
    const newLocation = location;

    this.setState({
      location: newLocation
    });
    localStorage.setItem('asdf', JSON.stringify(newLocation));
    this.setLocation();
  }

  render() {
    if (this.state.CurrentObject !== undefined) {
      return (
        <div className="App">
          <Search updateFunction={this.updateLocation} />
          <CurrentWeather currentWeather={this.state.CurrentObject} />
          <SevenHourForecast sevenHour={this.state.sevenHourForecast} />
          <TenDayForecast tenDay={this.state.tenDayObject} />
        </div>
      );
    } else if (!JSON.parse(localStorage.getItem('asdf'))) {
      return (
        <Welcome updateFunction={this.updateLocation} />
      );
    }
    return null;
  }
}

export default App;
