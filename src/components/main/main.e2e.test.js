import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`Main is correctly rendered after relaunch`, () => {
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
      owner: {imgAvatar: `img/avatar-angelina.jpg`,
        name: `Angelina Servantes de Mondega`,
        isSuper: true,
      },
      priceValue: 120,
      priceText: `night`,
    }
  ];

  const clickHandler = jest.fn();
  const app = shallow(<Main
    placeCardsInfo={testCard}
    onClick={clickHandler} />);
  const anchor = app.find(`PlacesList`).dive().find(`PlaceCard`).dive().find(`.place-card__name > a`);
  anchor.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
