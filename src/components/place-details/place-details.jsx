import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

class PlaceDetails extends PureComponent {
  render() {
    return <div className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img
                className="property__image"
                src={this.props.placeCardInfo.imgSrc}
                alt="Photo studio"
              />
            </div>
            {this.props.placeCardInfo.imgGallery.map((img, i) => {
              return (
                <div key = {`image-${this.props.placeCardInfo.id}-${i}`} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={img}
                    alt="Photo studio"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{this.props.placeCardInfo.type}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">{this.props.placeCardInfo.caption}</h1>
              <button
                className="property__bookmark-button button"
                type="button"
              >
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `96%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">
                {this.props.placeCardInfo.rating}
              </span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                Entire place
              </li>
              <li className="property__feature property__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{this.props.placeCardInfo.priceValue}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">Whats inside</h2>
              <ul className="property__inside-list">
                {this.props.placeCardInfo.domestic.map((listItem, i) => {
                  return (
                    <li key={`li-${this.props.placeCardInfo.id}-${i}`} className="property__inside-item">
                      {listItem}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={this.props.placeCardInfo.owner.imgSrc}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">{this.props.placeCardInfo.owner.name}</span>
                {this.props.placeCardInfo.owner.isSuper && (<span className="property__user-status">
                      Pro
                </span>)}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {this.props.placeCardInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
  }
}

PlaceDetails.propTypes = {
  placeCardInfo: PropTypes.shape({
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
  }),
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
};

export default PlaceDetails;
