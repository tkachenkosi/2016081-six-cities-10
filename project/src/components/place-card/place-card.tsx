import {useState, MouseEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {changeFavoritStatusAction} from '../../store/api-actions';
import {store} from '../../store/index';
import {calcRating} from '../../utils';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type PropertyCardProps = {
  offer: Offer;
  selectMapOffer: (offer: Offer | null) => void;
}

function PlaceCard({offer, selectMapOffer}: PropertyCardProps): JSX.Element {
  const [isFavorite, setFavorite] = useState(offer.isFavorite);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const onFavoriteClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const hotelId: number = offer.id;
      const status: number = offer.isFavorite ? 0 : 1;
      store.dispatch(changeFavoritStatusAction({hotelId, status}));
      setFavorite(!isFavorite);
    } else {
      navigate(AppRoute.Login);
    }
  };

  const onMouseEnterHandle = () => {
    selectMapOffer(offer);
  };

  const onMouseOutHandle = () => {
    selectMapOffer(null);
  };

  return (
    <article onMouseEnter={onMouseEnterHandle} onMouseLeave={onMouseOutHandle} className="cities__card place-card">
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Offer" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={onFavoriteClick} className={`place-card__bookmark-button ${offer.isFavorite && authorizationStatus === AuthorizationStatus.Auth && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calcRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type[0].toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>

  );
}


export default PlaceCard;
