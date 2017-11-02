import '../Styles/Search.scss';
import React, { Component } from 'react';
import CityNames from '../CityNames';
// import Trie from '../node_modules/@t6r6l5/CompleteMe';

class Search extends Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.updateVal = this.updateVal.bind(this);
    this.setLocation = this.setLocation.bind(this);
    // this.trie = new Trie();
    // this.trie.populate(CityNames);
  }

  updateVal(e) {
    this.setState({value: e.target.value});
  }

  setLocation() {
    if (this.state.value.length > 7){
      console.log('me go new place');
      this.props.updateFunction(this.state.value);
    }
  }

  render() {
    return (
      <div className="Search">

        <input type="text" value={this.state.value} onChange={this.updateVal} placeholder="Change Location"/>
        <button onClick={this.setLocation}>Get Weather</button>
      </div>
    )
  }
} 

export default Search;