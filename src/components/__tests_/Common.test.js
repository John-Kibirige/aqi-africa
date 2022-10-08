import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Common from '../Common';

it('Renders the common component without passing a prop ', () => {
  render(<Common />);
  const textElement = screen.getByText(/Home/);
  expect(textElement).toBeInTheDocument();
});

it('snapshot test for Common component', () => {
  const tree = renderer.create(<Common />).toJSON();
  expect(tree).toMatchSnapshot();
});
