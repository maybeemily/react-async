import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders a character', () => {
    const testCharacter = {
      image: '/path',
      name: 'Morty',
      status: 'Alive',
      species: 'Human'
    };
    const wrapper = shallow(<Character character = {testCharacter}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
