import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

//renders the paging - currentPage, totalPages, nextPage, children

describe('Paging component', () => {
  it('renders the paging', () => {
    const wrapper = shallow(<Paging currentPage={1} totalPages={10} nextPage={jest.fn()}>
      <h1>children!</h1>
    </Paging>);
    expect(wrapper).toMatchSnapshot();
  });
});
