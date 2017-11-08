import '../Styles/Welcome.scss';
import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

function Welcome (props) {
  return (
    <div className="Welcome">
      <Search updateFunction={props.updateFunction}/>
      <h3>Welcome to Weathrly! <i className="wi wi-day-sunny"></i></h3>
    </div>
  );
}

Welcome.propTypes = {
  updateFunction: PropTypes.func
};

export default Welcome;