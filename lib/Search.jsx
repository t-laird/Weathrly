import '../Styles/Search.scss';
import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.updateVal = this.updateVal.bind(this);
  }

  updateVal(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="Search">

        <input type="text" value={this.state.value} onChange={this.updateVal} placeholder="Change Location"/>
        <button>Get Weather</button>
      </div>
    )
  }
} 

export default Search;