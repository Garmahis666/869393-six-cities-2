import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';

it(`Main correctly renders after relaunch`, () => {
  const testCard = {
    id: `prop-1`,
    caption: `Beautiful & luxurious apartment at great location`,
    imgSrc: `img/apartment-01.jpg`,
    type: `Aparment`,
    priceValue: 120,
    priceText: `night`,
  };

  const onMouseOver = () => {};

  const tree = renderer
    .create(<PlaceCard key={testCard.id} placeCardInfo={testCard} onMouseOver={onMouseOver} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
