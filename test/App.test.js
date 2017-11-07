import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import cleanData from '../lib/cleanData';
import apiData from '../staticAPIdata';
global.fetch = require('jest-fetch-mock');

let {tenDayObject, CurrentObject, sevenHourForecast} = cleanData(apiData);

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

};


describe('App', () => {
  beforeEach( () => {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true, 
          Id: '123', 
          json: function() { 
            return {data: apiData};
          }
        });
      });
      
      return p;
    });
  });
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  });
  it('Should initialize the app component with an empty state', () => {
    const wrapper = mount(<App />);
    expect(Object.keys(wrapper.state()).length).toEqual(0);
    expect(wrapper.state('location')).toEqual(undefined);
  });

  it('Should set the state to the location as stored in localStorage', async () => {
    global.localStorage.setItem('a9c7bbg134o', 'Denver, CO');
    const wrapper = mount(<App />);
    wrapper.setState({location: JSON.parse(global.localStorage.getItem('a9c7bbg134o'))});
    expect(wrapper.state().location).toEqual('Denver, CO');
  });

  it('Should render the Search, CurrentWeather, SevenHourForecast and TenDayForecast components once it has been passed the data from the fetch request', () => {
    global.localStorage.setItem('a9c7bbg134o', 'Denver, CO');
    const wrapper = mount(<App />);
    wrapper.setState({location: JSON.parse(global.localStorage.getItem('a9c7bbg134o')), CurrentObject: CurrentObject, tenDayObject: tenDayObject, sevenHourForecast: sevenHourForecast});

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  });

  it('Should render only the Welcome component when it does not have any data in its state and localStorage does not have a value either.', () => {
    global.localStorage.a9c7bbg134o = null;
    const wrapper = mount(<App />);
    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('Should not render anything if the state has not yet been passed data and localstorage is not empty', () => {
    global.localStorage.a9c7bbg134o = 'Denver, CO';
    const wrapper = mount(<App />);

    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('Welcome').length).toEqual(0);
    expect(wrapper.find('App').length).toEqual(1);
  });
});