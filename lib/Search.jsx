import '../Styles/Search.scss';
import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {value: ''};
  }

  render() {
    return (
      <div className="Search">
        <input type="text" value={this.state.value} placeholder="Enter a Location"/>
        <button>Get Weather</button>
      </div>
    )
  }
} 

export default Search;