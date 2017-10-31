import '../Styles/App.scss';
import React, { Component } from 'react';
import SevenHourForecast from './7-Hour-Forecast';
import TenDayForecast from './10-Day-Forecast';
import CurrentWeather from './Current-Weather';
import Search from './Search';
import Welcome from './Welcome';

let sevenHourForecast = apiData.hourly_forecast.map((hour) => {
  return {hour: hour.FCTTIME.pretty, temp: hour.temp, condition: hour.condition, icon_url: hour.icon_url, humidity: hour.humidity, windSpeed: hour.wspd, windDirection: hour.wdir}
})

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Welcome />
        <Search />
        <CurrentWeather />
        <SevenHourForecast />
        <TenDayForecast />
      </div>
    )
  }
}

export default App;
