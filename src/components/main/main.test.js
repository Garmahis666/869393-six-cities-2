
import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Main correctly renders after relaunch`, () => {
  const testCard = [
    {
      id: 1,
      caption: `Beautiful & luxurious apartment at great location`,
      imgSrc: `img/apartment-01.jpg`,
      imgGallery: [
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
      ],
      type: `Aparment`,
      description: `You're gonna get super-home from his coolness.`,
      premium: true,
      rating: 4.5,
      bedrooms: 2,
      maxAdults: 2,
      domestic: [`Wifi`, `Heating`, `Kitcher`, `Cabel TV`],
      owner: {
        id: 1,
        imgAvatar: `img/avatar-angelina.jpg`,
        name: `Angelina Servantes de Mondega`,
        isSuper: true,
      },
      priceValue: 120,
    },
  ];

  const tree = renderer
    .create(<Main
      placeCardsInfo={testCard}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
