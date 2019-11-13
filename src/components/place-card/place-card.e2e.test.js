import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`PlaceCard is correctly rendered after relaunch`, () => {
  const testCard = {
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
  };

  const mouseOverHandler = jest.fn();

  const app = shallow(<PlaceCard placeCardInfo={testCard} onMouseOver={mouseOverHandler} />);

  const anchor = app.find(`#1`);
  anchor.simulate(`mouseover`);
  expect(mouseOverHandler).toHaveBeenCalledWith(testCard);
});
