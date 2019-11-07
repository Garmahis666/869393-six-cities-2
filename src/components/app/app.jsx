import React from "react";
import Main from '../main/main.jsx';

const App = () => {
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
      id: `prop-4`,
      caption: `Nice, cozy, warm big bed apartment`,
    },
  ];

  const onClick = () => {};
  return <Main
    placeCardsInfo={placeCardsInfo}
    onClick={onClick}
  />;
};

export default App;
