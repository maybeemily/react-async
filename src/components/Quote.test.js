import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('renders the quote', () => {
    const testQuote = {
      character: 'Leela',
      quote: 'Awww',
      image: '/path'
    };
    const wrapper = shallow(<Quote quote={testQuote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
