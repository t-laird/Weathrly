import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/Current-Weather';
import cleanData from '../lib/cleanData';
import App from '../lib/App';
import apiData from '../staticAPIdata';

let testData = cleanData(apiData);

describe('Current Weather', () => {

      it('should exist', () => {
        const wrapper = shallow(<CurrentWeather currentWeather={testData.CurrentObject} />);
        expect(wrapper).toBeDefined();
      });

      it('Should receive expected number of props', () => {
        const wrapper = mount(<CurrentWeather currentWeather={testData.CurrentObject} />);
        expect(Object.keys(wrapper.props().currentWeather).length).toEqual(14);
      });

      it('Should render the prop feelsLike', () => {
        const wrapper = mount(<CurrentWeather currentWeather={testData.CurrentObject} />);
        expect(wrapper.props().currentWeather.feelsLike).toEqual('50 F (10 C)');
      });

      it('should render the location', () => {
        const wrapper = mount(<CurrentWeather currentWeather={testData.CurrentObject} />);
        expect(wrapper.props().currentWeather.location).toEqual('Denver, CO');
      });

      it('should render the observation day', () => {
        const wrapper = mount(<CurrentWeather currentWeather={testData.CurrentObject} />);
        expect(wrapper.props().currentWeather.observationTime).toEqual('Last Updated on October 31, 3:00 PM MDT');
      });
    
      it('should render the current high/low for the day', () => {
        const wrapper = mount(<CurrentWeather currentWeather={testData.CurrentObject} />);
        expect(wrapper.props().currentWeather.high).toEqual('54');
        expect(wrapper.props().currentWeather.low).toEqual('43');
      });
    
      it('should render the current sentence', () => {
        const wrapper = mount(<CurrentWeather currentWeather={testData.CurrentObject} />);
        expect(wrapper.props().currentWeather.sentence).toEqual('Partly cloudy. High 54F. Winds light and variable.');
      });
    
      it('should render the currWeather', () => {
        const wrapper = mount(<CurrentWeather currentWeather={testData.CurrentObject} />);
        expect(wrapper.props().currentWeather.currWeather).toEqual('Partly Cloudy');
      });

});