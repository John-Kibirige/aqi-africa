import { render, screen } from '@testing-library/react';
import Africa from '../Africa';

it('Renders air quality index header', () => {
  render(<Africa />);
  const aqiHeader = screen.getByText(/ Air Quality Index/i);
  expect(aqiHeader).toBeInTheDocument();
});
