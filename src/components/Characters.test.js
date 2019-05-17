import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component test', () => {
  it('renders characters', () => {
    const charactersArray = [
      {
        image: '/path',
        name: 'Morty',
        status: 'Alive',
        species: 'Human'
      },
      {
        image: '/path',
        name: 'Rick',
        status: 'Alive',
        species: 'Human'
      }
    ];
    const wrapper = shallow(<Characters characters = {charactersArray}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
