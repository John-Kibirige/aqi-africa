import { render, screen } from '@testing-library/react';
import Common from '../Common';

it('Renders the common component without passing a prop ', () => {
  render(<Common />);
  const textElement = screen.getByText(/Home/);
  expect(textElement).toBeInTheDocument();
});
