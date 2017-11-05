import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/Current-Weather';
import App from '../lib/App';
import apiData from '../staticAPIdata';

describe('Current Weather', () => {
  
    let component;
    
      beforeEach(() => {
        component = shallow(<CurrentWeather
            location = "Denver, CO"
            observation = "Capitol Hill, Denver"
            temp = "69.3˚"
            tempNum = "69.6˚"
            currWeather = "Partly Cloudy"
            feelsLike = "69.6 F (20.9 C)"
            high = "70"
            low = "39"
            windDegs = "223"
            windDir = "SW"
            windSpeed = "1.8"
            observationTime = "Last Updated on November 4, 2:43 PM MDT"
            sentence = "Partly cloudy and windy. High 71F. Winds SW at 20 to 30 mph. Winds could occasionally gust over 40 mph."
            icon = "partlycloudy"
        />)
      });

    it('should render the current temp', () => {
        const current = component.find('.temperature');
        expect(current.text()).toEqual('69.6°');
    
      });

      it('should render the location', () => {
        const location = component.find('.weatherInfo');
        expect(location.text()).toEqual('Denver, CO');
      });


});