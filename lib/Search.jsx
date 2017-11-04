import '../Styles/Search.scss';
import React, { Component } from 'react';
import CityNames from '../CityNames';
import Trie from '@t6r6l5/CompleteMe';
// const Trie = require('@t6r6l5/CompleteMe');

class Search extends Component {
  constructor() {
    super();
    this.state = {value: '', focus: 0};

    this.updateVal = this.updateVal.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.autoComplete = this.autoComplete.bind(this);
    this.selectLI = this.selectLI.bind(this);
    this.trie = new Trie();
    this.trie.populate(CityNames.data);
  }

  updateVal(e) {
    this.setState({value: e.target.value, focus: 0});
    if (e.target.value.length) {
      this.trie.suggest(e.target.value);
    } else {
      this.trie.suggestions = [];
    }
    console.log(this.trie.suggestions);
  }

  setLocation() {
    let foundCity = CityNames.data.find( city => {
      return city === this.state.value;
    });

    if (!foundCity) {
      foundCity = CityNames.data.find( city => {
        return (city.toLowerCase()).includes(this.state.value.toLowerCase());
      });
    }
    console.log(foundCity);
    if (foundCity) {
      this.props.updateFunction(foundCity);
    }
    this.setState({value: ''});
    this.trie.suggestions = [];
  }

  autoComplete(e) {
    this.setState({value: e.target.innerText});
    this.trie.suggestions = [];
  }

  selectLI(e) {
    if (e.key === 'ArrowDown') {
        if (this.trie.suggestions[this.state.focus]) {
          this.setState({
            value: this.trie.suggestions[this.state.focus],
            focus: (Math.min(this.state.focus + 1, 5))
          })
        }
    } else if (e.key === 'ArrowUp') {
      if (this.trie.suggestions[this.state.focus]) {
        this.setState({
          focus: (Math.max(this.state.focus - 1, 0)),
          value: this.trie.suggestions[(Math.max(this.state.focus - 1, 0))]
        });
      }
    } else if (e.key === "Enter") {
      console.log('submitting');
      this.setLocation();
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className="Search">
        <div className="inputs">
          <input type="text" value={this.state.value} onChange={this.updateVal} placeholder="City, STATE" onKeyDown={this.selectLI}/>
          <button onSelect={this.setLocation} onClick={this.setLocation}>Get Weather</button>          
        </div>
        <ul>
          {this.trie.suggestions.map((suggestion, index) => {
            if (index < 6) {
              return <li onClick={this.autoComplete} key={index}>{suggestion}</li>
            }
          })}
        </ul>
      </div>
    )
  }
} 

export default Search;