import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import Search from '../Search';

it('Renders when there are props passed to it', () => {
  const tree = renderer
    .create(<Search nameState="name state" handleOnChange={() => ''} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Render input field well ', () => {
  render(<Search nameState="name state" handleOnChange={() => ''} />);
  const inputEl = screen.getByPlaceholderText(/Search by country/i);
  expect(inputEl).toBeInTheDocument();
});
