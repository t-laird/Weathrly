import '../Styles/App.scss';
import React, { Component } from 'react';
import SevenHourForecast from './7-Hour-Forecast';
import TenDayForecast from './10-Day-Forecast';
import CurrentWeather from './Current-Weather';
import Search from './Search';
import Welcome from './Welcome';

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