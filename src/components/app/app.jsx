import React from "react";
import Main from '../main/main.jsx';
import PlaceDetails from '../place-details/place-details';
import offers from './../../mocks/offers.js';

const getPageScreen = (props) => {
  switch (location.pathname) {
    case `/`:
      return <Main placeCardsInfo={props} />;
    case `/place-details`:
      return <PlaceDetails placeCardInfo={props[0]} />;
  }

  return null;
};

const App = () => {
  return <React.Fragment>{getPageScreen(offers)}</React.Fragment>;
};

export default App;
