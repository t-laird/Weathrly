import '../Styles/10-Day-Forecast.scss';
import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function TenDayForecast (props) {
  return (
    <div className="TenDay">
      <div className="ten-day-container-title">10 Day Forecast</div>
      <div className="card-container">
        {
          props.tenDay.map((day, index) => {
            return (
              <Card weather={day} key={index} />
            );
          })
        }
      </div>
    </div>
  );
}


TenDayForecast.propTypes = {
  tenDay: PropTypes.array,
  ['tenDay.map']: PropTypes.object
};

export default TenDayForecast;
