import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

if('Renders when there are no props passed to it', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
})
