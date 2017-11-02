function cleanData (data) {
  let apiData = data;
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

  return {tenDayObject, CurrentObject, sevenHourForecast};
}

module.exports = cleanData;