import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`PlaceCard is correctly rendered after relaunch`, () => {
  const testCard = {
    id: `prop-1`,
    caption: `Beautiful & luxurious apartment at great location`,
    imgSrc: `img/apartment-01.jpg`,
    type: `Aparment`,
    priceCurrency: `€`,
    priceValue: 120,
    priceText: `night`,
  };

  const mouseOverHandler = jest.fn();

  const app = shallow(<PlaceCard key={testCard.id} placeCardInfo={testCard} onMouseOver={mouseOverHandler} />);

  const anchor = app.find(`#prop-1`);
  anchor.simulate(`mouseover`);
  expect(mouseOverHandler).toHaveBeenCalledWith(testCard);
});
