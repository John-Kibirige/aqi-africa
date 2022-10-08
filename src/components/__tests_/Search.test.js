import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import Search from '../Search';

it('Renders when there are no props passed to it', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Render input field well ', () => {
  render(<Search />);
  const inputEl = screen.getByPlaceholderText(/Search by country/i);
  expect(inputEl).toBeInTheDocument();
});
