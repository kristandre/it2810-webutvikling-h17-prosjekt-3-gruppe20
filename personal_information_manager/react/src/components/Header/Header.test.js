import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './Header';




it('Header renders without crashing', () => {
  shallow(<Header />);
});