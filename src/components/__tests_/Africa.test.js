import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Africa from '../Africa';

it('Renders air quality index header', () => {
  render(<Africa />);
  const aqiHeader = screen.getByText(/ Air Quality Index/i);
  expect(aqiHeader).toBeInTheDocument();
});

it('Snapshot test for africa component passes  ', () => {
  const tree = renderer.create(<Africa />).toJSON();
  expect(tree).toMatchSnapshot();
})
