import {Link} from 'react-router-dom';

import {Premium} from '../common';

import {Offer} from '../../types/offers';

import {AppRoute} from '../../const';

type OfferNearCardProps = {
  offer: Offer;
  handleCardMouseOver: () => void;
}

/* «Карточка предложения неподалёку» */
function OfferNearCard({offer, handleCardMouseOver}: OfferNearCardProps): JSX.Element {
  const {previewImage, isPremium, price, title, type} = offer;

  const linkToOffer = `${AppRoute.Offer}/${offer.id}`;

  return (
    <article
      className="near-places__card place-card"
      onMouseOver={handleCardMouseOver}
    >
      {isPremium && <Premium /> }
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={linkToOffer}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkToOffer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferNearCard;
