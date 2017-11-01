import '../Styles/App.scss';
import React, { Component } from 'react';
import SevenHourForecast from './7-Hour-Forecast';
import TenDayForecast from './10-Day-Forecast';
import CurrentWeather from './Current-Weather';
import Search from './Search';
import Welcome from './Welcome';
import apiData from '../staticAPIdata';
import key from '../apiKey';
import cleanData from './cleanData';



let tenDayObject = apiData.forecast.simpleforecast.forecastday.map(day => {
  return {
    date: day.date.pretty,
    high: day.high.fahrenheit,
    low: day.low.fahrenheit,
    conditions: day.conditions,
    windMPH: day.maxwind.mph,
    windDir: day.maxwind.dir
  };
});

let CurrentObject = {
  observationTime: apiData.current_observation.observation_time,
  location: apiData.current_observation.display_location.full,
  observationLoc: apiData.current_observation.observation_location.city,
  temp: apiData.current_observation.temperature_string,
  tempNum: apiData.current_observation.temp_f,
  windDir: apiData.current_observation.wind_dir,
  windSpeed: apiData.current_observation.wind_mph,
  windDegs: apiData.current_observation.wind_degrees,
  feelsLike: apiData.current_observation.feelslike_string,
  currWeather: apiData.current_observation.weather,
  high: tenDayObject[0].high,
  low: tenDayObject[0].low,
  sentence: apiData.forecast.txt_forecast.forecastday[0].fcttext
};

let sevenHourForecast = apiData.hourly_forecast.map((hour) => {
  return {
    hour: hour.FCTTIME.civil,
    day: hour.FCTTIME.weekday_name,
    temp: hour.temp,
    condition: hour.condition,
    icon_url: hour.icon_url,
    humidity: hour.humidity,
    windSpeed: hour.wspd,
    windDirection: hour.wdir
  }
}).slice(0,7);

class App extends Component {
  constructor() {
    super();
    this.state = {};    
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/CO/Denver.json`)
      .then(res => res.json())
      .then(data => {
        let apiData = data;

        const {CurrentObject, sevenHourForecast, tenDayObject} = cleanData(apiData);

        this.setState({ CurrentObject: CurrentObject, tenDayObject: tenDayObject, sevenHourForecast: sevenHourForecast });
      });
  }

  render() {
    console.log(this.state);
    if (this.state.CurrentObject !== undefined) {
      return (
        <div className="App">
          <Welcome />
          <Search />
          <CurrentWeather currentWeather={this.state.CurrentObject} />
          <SevenHourForecast sevenHour={this.state.sevenHourForecast} />
          <TenDayForecast tenDay={this.state.tenDayObject} />
          {/* <CurrentWeather currentWeather={CurrentObject} />
          <SevenHourForecast sevenHour={sevenHourForecast} />
          <TenDayForecast tenDay={tenDayObject} /> */}
        </div>
      )    
    }
    return null;
  }
}

export default App;
