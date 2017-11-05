import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';
import cleanData from '../lib/cleanData';
import apiData from '../staticAPIdata';

let hourCardData = cleanData(apiData).sevenHourForecast;
let dayCardData = cleanData(apiData).tenDayObject;


describe('Card', ()=> {
  it('should exist', () => {
    const wrapper = shallow(<Card weather={hourCardData[0]} />);
    expect(wrapper).toBeDefined();
  });

  it ('Should receive a props object with hour data when passed hour data', () => {
    const wrapper = mount(<Card weather={hourCardData[0]} />);
    expect(wrapper.props().weather.hour).toBeDefined();
    expect(wrapper.props().weather.temp).toBeDefined();
    expect(wrapper.props().weather.condition).toBeDefined();
    expect(wrapper.props().weather.icon).toBeDefined();
    expect(wrapper.props().weather.humidity).toBeDefined();
  });

  it ('Should receive a props object with day data when passed day data', () => {
    const wrapper = mount(<Card weather={dayCardData[0]} />);
    expect(wrapper.props().weather.condition).toBeDefined();
    expect(wrapper.props().weather.day).toBeDefined();
    expect(wrapper.props().weather.high).toBeDefined();
    expect(wrapper.props().weather.low).toBeDefined();
  });

  it ('Should render a different set of html when given day data', () => {
    const wrapper = mount(<Card weather={dayCardData[0]} />);
    expect(wrapper.find('div').slice(3, 4).text().includes('High of')).toEqual(true);
    expect(wrapper.find('div').slice(4, 5).text().includes('Low of')).toEqual(true);
    expect(wrapper.find('div').slice(5, 6).text().includes('Min Humidity')).toEqual(true);
    expect(wrapper.find('div').slice(6, 7).text().includes('Max Humidity')).toEqual(true);
  });

  it ('Should not render any of the day data when given hour data', () => {
    const wrapper = mount(<Card weather={hourCardData[0]} />);
    expect(wrapper.find('div').slice(3, 4).text().includes('High of')).toEqual(false);
    expect(wrapper.find('div').slice(4, 5).text().includes('Low of')).toEqual(false);
  });

  it ('Should render a different set of html when given hour data', () => {
    const wrapper = mount(<Card weather={hourCardData[0]} />);
    expect(wrapper.find('div').slice(2, 3).text().includes('Temp')).toEqual(true);
    expect(wrapper.find('div').slice(3, 4).text().includes('Humidity')).toEqual(true);
  });
  
  it ('Should not render any of the hour data when given day data', () => {
    const wrapper = mount(<Card weather={dayCardData[0]} />);
    expect(wrapper.find('div').slice(2, 3).text().includes('Temp')).toEqual(false);
    expect(wrapper.find('div').slice(3, 4).text().includes('Humidity')).toEqual(false);
  });

});