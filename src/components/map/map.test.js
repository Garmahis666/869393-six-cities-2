import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

it(`Map correctly renders after relaunch`, () => {
  const testCard = [{
    id: `prop-1`,
    caption: `Beautiful & luxurious apartment at great location`,
    imgSrc: `img/apartment-01.jpg`,
    type: `Aparment`,
    priceValue: 120,
    priceText: `night`,
    coordinates: {
      y: 52.3909553943508,
      x: 4.85309666406198
    },
  }];

  const tree = renderer
    .create(<Map placeCardInfo={testCard} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
