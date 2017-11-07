import '../Styles/Current-Weather.scss';
import React from 'react';
import PropTypes from 'prop-types';

function CurrentWeather (props) {
  //eslint-disable-next-line max-len
  let { location, tempNum, high, low, windDegs, windDir, windSpeed, observationTime, sentence, icon } = props.currentWeather;

  icon = `wi wi-wu-${icon.replace(/\s/g, '')}`;
  icon === 'wi wi-wu-fog' ? icon = 'wi wi-day-fog' : null;

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
          <i className={"wi wi-wind towards-" + windDegs + "-deg"}></i>
        </p>
      </div>
      <div className="divider">

      </div>
      <div className="rightHalf">
        <h3>TODAY:</h3>
        <span className="high">{high}˚ </span> 
        <span className="low">{low}˚ </span>
        <p>
          {sentence}
        </p>
      </div>  
    </div>
  );
}

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object
};

export default CurrentWeather;
