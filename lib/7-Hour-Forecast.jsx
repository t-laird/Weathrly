import '../Styles/7-Hour-Forecast.scss';
import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class SevenHourForecast extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {

    return (
      <div className="SevenHour">
        <div className="seven-hour-container-title">7 Hour Forecast</div>
        <div className="card-container">
          {
            this.props.sevenHour.map((hour, index) => {
              return (
                <Card weather={hour} key={index} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

SevenHourForecast.propTypes = {
  sevenHour: PropTypes.array,
  ['sevenHour.map']: PropTypes.object
};


export default SevenHourForecast;

