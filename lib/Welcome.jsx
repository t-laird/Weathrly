import '../Styles/Welcome.scss';
import React, { Component } from 'react';

class Welcome extends Component {
  constructor() {
    super();
    this.hideWelcome = this.hideWelcome.bind(this);
    this.state = {display: 'default'}
  }

  hideWelcome() {
    console.log('hello');
    this.setState({display: 'none'})
    console.log(this.state);
  }



  render() {
    return (
      <div className="Welcome" style={{'display': this.state.display}}>
        {/* <button className="exit" onClick={this.hideWelcome}>X</button>
        <input type="text" placeholder="Enter Your Location" />
        <button className="showWeather">Show Me The Weather</button>
        <h3>Welcome to Weathrly!</h3> */}
      </div>
    )
  }
}

export default Welcome;