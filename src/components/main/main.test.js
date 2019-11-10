
import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Main correctly renders after relaunch`, () => {
  const testCard = [
    {
      id: `prop-2`,
      caption: `Wood and stone place`,
      imgSrc: `img/room.jpg`,
      type: `Private room`,
      priceValue: 80,
      priceText: `night`,
    },
  ];

  const tree = renderer
    .create(<Main
      placeCardsInfo={testCard}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
