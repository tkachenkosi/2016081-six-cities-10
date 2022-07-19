import {useState, MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';


type PropertyCardProps = {
  offer: Offer;
}


function PlaceCard({offer}: PropertyCardProps): JSX.Element {
  const [isFavorite, setFavorite] = useState(offer.isFavorite);
  const [idOffer, setIdOffer] = useState(offer.id);

  const onFavoriteClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setFavorite(!isFavorite);
  };

  const onMouseEnterHandle = () => {
    setIdOffer(idOffer);
  };

  const onMouseOutHandle = () => {
    setIdOffer(-1);
  };

  return (
    <article onMouseEnter={onMouseEnterHandle} onMouseOut={onMouseOutHandle} className="cities__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={onFavoriteClick} className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>

  );
}


export default PlaceCard;
