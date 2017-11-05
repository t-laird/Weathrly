import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome';

describe('WELCOME PAGE', () => {

  it('should render the welcome page', () => {
    const component = shallow(<Welcome />);
    const greeting = component.find('.Welcome');
    expect(greeting.text()).toEqual('<Search />Welcome to Weathrly! ');
  });

  it('should render search bar', () => {
    const component = mount(<Welcome />);
    const current = component.find('.Welcome input');
    expect(current.nodes.length).toEqual(1);
  });

});