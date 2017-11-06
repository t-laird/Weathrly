import '../Styles/Welcome.scss';
import React, { Component } from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

class Welcome extends Component {
  constructor() {
    super();
    this.hideWelcome = this.hideWelcome.bind(this);
    this.state = {display: 'default', value: ''};
    this.updateVal = this.updateVal.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  hideWelcome() {
    this.setState({display: 'none'});
  }

  updateVal(e) {
    this.setState({value: e.target.value});
  }

  setLocation() {
    this.props.updateFunction(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="Welcome" style={{'display': this.state.display}}>
        <Search updateFunction={this.props.updateFunction}/>
        <h3>Welcome to Weathrly! <i className="wi wi-day-sunny"></i></h3>
      </div>
      );
  }
}

Welcome.propTypes = {
  updateFunction: PropTypes.func
};

export default Welcome;