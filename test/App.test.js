import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import cleanData from '../lib/cleanData';
import apiData from '../staticAPIdata';

global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return (JSON.stringify(global.localStorage[keyword]));
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};

global.fetch = function () {
  function then () {

  }
  return apiData;
};
global.then = function () {};

describe('App', () => {
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  });
  it('Should initialize the app component with an empty state', () => {
    const wrapper = mount(<App />);
    expect(Object.keys(wrapper.state()).length).toEqual(0);
    expect(wrapper.state('location')).toEqual(undefined);
  });

  it('Should set the state to the key as stored in localStorage', () => {
    global.localStorage.setItem('asdf', 'Denver, CO');
    const wrapper = shallow(<App />);
  });
});