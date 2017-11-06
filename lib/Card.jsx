import '../Styles/Card.scss';
import React from 'react';
import PropTypes from 'prop-types';


class Card extends React.Component {
  constructor () {
    super ();

  }

  render () {
    //eslint-disable-next-line max-len
    let { day, icon, condition, high, low, maxHumid, minHumid, maxWind, windDirection, hour, temp, windSpeed, humidity } = this.props.weather;

    icon = `wi wi-wu-${(icon).replace(/\s/g, '')}`;
    icon === 'wi wi-wu-fog' ? icon = 'wi wi-day-fog' : null;    
    
    return (
      <div className="Card">
        {high &&
          <div> 
            <h1 className="ten-day-day">{day} </h1>
            <div className="icon-container">
              <i className={icon}></i>
            </div>      
            <div className="ten-day-condition"> {condition} </div>
              <hr></hr>
              <div className="ten-day-temp-wrap">
              <div className="ten-day-temp-high"> {high}˚ </div>
              <div className="ten-day-temp-low"> {low}˚ </div>
            </div>
            <div className="ten-day-humid-wrap">
              <div className="ten-day-humid-high"> Humid {maxHumid}% </div>
              <div className="ten-day-humid-low"> {minHumid}% </div>
            </div>
            <div className="ten-day-wind-wrap">
              <div className="ten-day-wind-speed"> Wind {maxWind}mph</div>
              <div className="ten-day-wind-direction"> {windDirection}</div>
            </div>
          </div>
        }
        {!high &&
          <div>
            <h1 className="seven-hour-hour">{hour} </h1>
            <div className="icon-container">
              <i className={icon}></i>
            </div>
            <div className="seven-hour-temp"> {temp}˚ </div>         
            <hr></hr>
            <div className="wind-style">
              <div className="seven-hour-wind-speed"> {windSpeed}mph </div>
              {//eslint-disable-next-line max-len
              } <div className="seven-hour-wind-direction"> {windDirection} </div>    
            </div>
            <div className="seven-hour-humidity"> {humidity}% Humidity </div>
          </div>
        }
      </div>
    );
  }

}
export default Card;

Card.propTypes = {
  weather: PropTypes.object.isRequired

};

