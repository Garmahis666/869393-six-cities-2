import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class PlaceCard extends PureComponent {
  render() {
    return <article className="cities__place-card place-card" id={this.props.placeCardInfo.id} onMouseOver={this.mouseOverHandle.bind(this)}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={this.props.placeCardInfo.imgSrc} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{this.props.placeCardInfo.priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;{this.props.placeCardInfo.priceText}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={this.props.onClick}>{this.props.placeCardInfo.caption}</a>
        </h2>
        <p className="place-card__type">{this.props.placeCardInfo.type}</p>
      </div>
    </article>;
  }

  mouseOverHandle() {
    if (this.props.onMouseOver) {
      this.props.onMouseOver(this.props.placeCardInfo);
    }
  }
}

PlaceCard.propTypes = {
  placeCardInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    priceValue: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
};

export default PlaceCard;
