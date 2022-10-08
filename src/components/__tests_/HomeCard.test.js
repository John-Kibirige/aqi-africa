import React from 'react';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomeCard from '../HomeCard';

it('Test to see if the home card renders well ', () => {
  render(<HomeCard imageUrl="url" country="Uganda" aqIndex={3} />);
  const renderedText = screen.getByText(/Air Quality Index/i);
  expect(renderedText).toBeInTheDocument();
});

it('Create sapshot for home card component ', () => {
  const tree = renderer
    .create(<HomeCard imageUrl="url" country="Uganda" aqIndex={3} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
