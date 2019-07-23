import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes component', () => {
  it('renders a list of quotes', () => {
    const testQuotes = [
      {
        character: 'Leela',
        quote: 'Awww',
        image: '/path'
      },
      {
        character: 'Fry',
        quote: 'I.C Weiner??',
        image:'/path'
      }
    ];

    const wrapper = shallow(<Quotes quoteArray={testQuotes}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
