import '../Styles/Welcome.scss';
import React, { Component } from 'react';
import Search from './Search';

class Welcome extends Component {
  constructor() {
    super();
    this.hideWelcome = this.hideWelcome.bind(this);
    this.state = {display: 'default', value: ''};
    this.updateVal = this.updateVal.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  hideWelcome() {
    this.setState({display: 'none'})
  }

  updateVal(e) {
    this.setState({value: e.target.value})
  }

  setLocation() {
    if (this.state.value.length > 7){
      this.props.updateFunction(this.state.value);
    }
    this.setState({value: ''});
  }



  render() {
    console.log(this.props.newUser);
      return (
        <div className="Welcome" style={{'display': this.state.display}}>
          {/* <button className="exit" onClick={this.hideWelcome}>X</button>
          <input type="text" placeholder="Enter Your Location" onChange={this.updateVal}/>
          <button onClick={this.setLocation} className="showWeather">Show Me The Weather</button> */}
          <Search updateFunction={this.props.updateFunction}/>
          <h3>Welcome to Weathrly! <i className="wi wi-day-sunny
"></i></h3>
        </div>
      )
  }
}

export default Welcome;