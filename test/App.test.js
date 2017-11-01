import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('App', () => {
  it('Should contain a div with the class of App', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.find('.App').length)
  

  });
});