import '../Styles/10-Day-Forecast.scss';
import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class TenDayForecast extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="TenDay">
        <div className="card-container">
        {
          this.props.tenDay.map((day, index) => {
            return (
              <Card weather={day} key={index} />
            );
          })
        }
        </div>
      </div>
    );
  }
}

TenDayForecast.propTypes = {
  tenDay: PropTypes.array,
  ['tenDay.map']: PropTypes.object
};

export default TenDayForecast;
