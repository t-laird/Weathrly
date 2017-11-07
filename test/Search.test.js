import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';

describe('Search', () => {
  it('Should create a search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toBeDefined();
  });

  it('Should instantiate with an empty value, focus of 0 and an empty placeholder', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.state().value).toEqual('');
    expect(wrapper.state().focus).toEqual(0);
    expect(wrapper.state().placeholder).toEqual('enter your location');
  });

  it('Should be instantiated with an input field, button and empty unordered list', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(0);
  });

  it('Should update state upon input', ()=> {
    const wrapper = mount(<Search />);
    const event = {target: {value: "b49ac13dx0laa1jkl"}};
    
    wrapper.find('input').simulate('change', event);
    expect(wrapper.state('value')).toEqual('b49ac13dx0laa1jkl');
  });

  it('Should show a list of suggestions upon input', ()=> {
    const wrapper = mount(<Search />);
    const event = {target: {value: "denv"}};
    
    wrapper.find('input').simulate('change', event);
    expect(wrapper.find('li').text()).toEqual('Denver, CO');
  });

  it('Should show a different list of suggestions given a different input', ()=> {
    const wrapper = mount(<Search />);
    const event = {target: {value: "colo"}};
    
    wrapper.find('input').simulate('change', event);
    expect(wrapper.find('li').text()).toEqual('Colorado Springs, CO');
  });

  it('Should show a different list of suggestions given a different input', ()=> {
    const wrapper = mount(<Search />);
    const event = {target: {value: "colo"}};
    
    wrapper.find('input').simulate('change', event);
    expect(wrapper.find('li').text()).toEqual('Colorado Springs, CO');
  });

  it('Should dynamically highlight suggestions upon arrow down/up input', ()=> {
    const wrapper = mount(<Search />);
    const event = {target: {value: "san"}, key: 'ArrowDown'};
    
    expect(wrapper.state('focus')).toEqual(0);
    wrapper.find('input').simulate('change', event);
    wrapper.find('input').simulate('keyDown', event);
    wrapper.find('input').simulate('keyDown', event);
    expect(wrapper.state('focus')).toEqual(1);
    expect(wrapper.state('value')).toEqual('San Rafael, CA');    
  });

  it('Should place an error message in the input field if an an input is not found', ()=> {
    let mockUpdate = function () {}
    const wrapper = mount(<Search updateFunction={mockUpdate}/>);
    const event = {target: {value: "b49ac13dx0laa1jkl"}};
    expect(wrapper.state('placeholder')).toEqual('enter your location');
    wrapper.find('input').simulate('change', event);
    wrapper.find('button').simulate('click');

    expect(wrapper.state('value')).toEqual('');
    expect(wrapper.state('focus')).toEqual(null);
    expect(wrapper.state('placeholder')).toEqual('location not found');    
  });
});