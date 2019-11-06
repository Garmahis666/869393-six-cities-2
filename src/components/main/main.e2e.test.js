import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () => {
  const placeCardsInfo = [
    {
      id: `prop-1`,
      caption: `Beautiful & luxurious apartment at great location`,
    },
    {
      id: `prop-2`,
      caption: `Wood and stone place`,
    },
    {
      id: `prop-3`,
      caption: `Canal View Prinsengracht`,
    },
    {
      id: `prop-5`,
      caption: `Nice, cozy, warm big bed apartment`,
    },
  ];

  const onClick = jest.fn();

  const app = shallow(<Main
    placeCardsInfo={placeCardsInfo}
    onClick={onClick} />);
  const card = app.find(`.place-card__name > a`);
  card.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
