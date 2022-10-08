import React from 'react';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DetailsCard from '../DetailsCard';

const renderedComp = (
  <DetailsCard
    imageUrl="www"
    country="String"
    aqIndex={43}
    latitude={43}
    longitude={43}
    capital="String"
    co={43}
    no={43}
    no2={43}
    o3={43}
    so2={43}
    pm25={43}
    pm10={43}
    nh3={43}
  />
);

it('Render details card successfully', () => {
  render(renderedComp);
  const element = screen.getByText(/Air Quality Index breakdown/i);
  expect(element).toBeInTheDocument();
});

it('Create snapshot test for the Details Card component ', () => {
  const tree = renderer.create(renderedComp).toJSON();
  expect(tree).toMatchSnapshot();
});
