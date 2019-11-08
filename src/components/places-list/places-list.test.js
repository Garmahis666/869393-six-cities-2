import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list';

it(`Main correctly renders after relaunch`, () => {
  const testCard = [
    {
      id: `prop-1`,
      caption: `Beautiful & luxurious apartment at great location`,
      imgSrc: `img/apartment-01.jpg`,
      type: `Aparment`,
      priceCurrency: `€`,
      priceValue: 120,
      priceText: `night`,
    },
  ];

  const tree = renderer
    .create(<PlacesList key="PlacesList" placeCardsInfo={testCard} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
