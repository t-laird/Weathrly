import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHourForecast from '../lib/7-Hour-Forecast';
import cleanData from '../lib/cleanData';
import apiData from '../staticAPIdata';

let testData = cleanData(apiData);

describe('7 Hour' , () => {
  it ('should exist', () => {
    const wrapper = shallow(<SevenHourForecast sevenHour={testData.sevenHourForecast} />)
    expect(wrapper).toBeDefined()
  });

  it ('Should initialize 7 card components', () => {
    const wrapper = mount(<SevenHourForecast sevenHour={testData.sevenHourForecast} />)
    expect(wrapper.find('.Card').length).toEqual(7);
  });

  it ('Should receive expected number of props for a single hour', () => {
    const wrapper = mount(<SevenHourForecast sevenHour={testData.sevenHourForecast} />);
    expect(Object.keys(wrapper.props().sevenHour[0]).length).toEqual(8);
  });

  it ('Should receive "4:00 PM" as the prop for hour', () => {
    const wrapper = mount(<SevenHourForecast sevenHour={testData.sevenHourForecast} />);
    expect(wrapper.props().sevenHour[0].hour).toEqual('4:00 PM');
  });

  it ('Should receive "SE" as the prop for windDirection', () => {
    const wrapper = mount(<SevenHourForecast sevenHour={testData.sevenHourForecast} />);
    expect(wrapper.props().sevenHour[0].windDirection).toEqual('SE');
  });

  it ('The first card component should have a time of 4pm', () => {
    const wrapper = mount(<SevenHourForecast sevenHour={testData.sevenHourForecast} />)
    expect(wrapper.find('.Card').find('h1').slice(0,1).text()).toEqual('4:00 PM ');
  });

  it ('The last card component should have a time of 9pm', () => {
    const wrapper = mount(<SevenHourForecast sevenHour={testData.sevenHourForecast} />)
    expect(wrapper.find('.Card').find('h1').slice(5,6).text()).toEqual('9:00 PM ');
  });

  it ('The first card component should have a wind direction of SE', () => {
    const wrapper = mount(<SevenHourForecast sevenHour={testData.sevenHourForecast} />);
    expect(wrapper.find('.Card').slice(0,1).find('div').slice(4,5).text()).toEqual(' 7mph   SE ');
  });

  it ('The last card component should have a wind direction of S', () => {
    const wrapper = mount(<SevenHourForecast sevenHour={testData.sevenHourForecast} />);
    expect(wrapper.find('.Card').slice(5,6).find('div').slice(4,5).text()).toEqual(' 9mph   S ');
  });
})