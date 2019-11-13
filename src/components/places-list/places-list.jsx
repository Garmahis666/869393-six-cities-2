import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from './../place-card/place-card.jsx';

class PlacesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this.onPlaceCardMouseOver = this.onPlaceCardMouseOver.bind(this);
  }

  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.properties}
    </div>;
  }

  get properties() {
    return this.props.placeCardsInfo.map((item) => (
      <PlaceCard key={item.id} placeCardInfo={item} onClick={this.props.onClick} onMouseOver={this.onPlaceCardMouseOver} />
    ));
  }

  onPlaceCardMouseOver(activeCard) {
    this.setState({activeCard});
  }

  shouldComponentUpdate() {
    return false;
  }
}

PlacesList.propTypes = {
  placeCardsInfo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgGallery: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    domestic: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.exact({
      id: PropTypes.number,
      imgAvatar: PropTypes.string,
      name: PropTypes.string,
      isSuper: PropTypes.bool,
    }),
    priceValue: PropTypes.number.isRequired,
  })).isRequired,
  onClick: PropTypes.func,
};

export default PlacesList;
