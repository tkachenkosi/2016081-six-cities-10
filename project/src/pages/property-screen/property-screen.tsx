import React, {useState, useEffect, useCallback, MouseEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearList from '../../components/near-list/near-list';
import ImagesGallery from '../../components/images-gallery/images-gallery';
import MapOffers from '../../components/map-offers/map-offers';
import {useAppSelector} from '../../hooks';
import {fetchReviewsAction, fetchNearbyOffersAction, fetchRoomOfferAction, changeFavoritStatusAction} from '../../store/api-actions';
import {Offer, Review} from '../../types/offer';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {calcRating} from '../../utils';
import {store} from '../../store/index';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getReviews, getRoomOffer, getNearbyOffers, getLoadedDataStatus} from '../../store/data-process/selectors';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    store.dispatch(fetchRoomOfferAction(params.id));
    store.dispatch(fetchReviewsAction(params.id));
    store.dispatch(fetchNearbyOffersAction(params.id));
  }, [params.id]);

  const [activeMapOffer, setActiveMapOffer] = useState<Offer | null>(null);
  const selectMapOffer = useCallback((offer: Offer | null) => setActiveMapOffer(offer), []);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const roomOffer: Offer = useAppSelector(getRoomOffer);
  const reviews: Review[] = useAppSelector(getReviews);
  const nearbyOffers: Offer[] = useAppSelector(getNearbyOffers);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const {id, title, price, type, rating, images, goods, host, description, bedrooms, maxAdults, isPremium, isFavorite} = roomOffer;
  const [isFav, setFavorite] = useState(isFavorite);

  const onFavoriteClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const hotelId: number = id;
      const status: number = isFavorite ? 0 : 1;
      store.dispatch(changeFavoritStatusAction({hotelId, status}));
      setFavorite(!isFav);
    } else {
      navigate(AppRoute.Login);
    }
  };

  useEffect(() => {
    if (isDataLoaded) {
      navigate(AppRoute.NotFound);
    }
  }, [isDataLoaded]);

  return (
    <div className="page" data-testid="property-page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <ImagesGallery images={images} />
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button onClick={onFavoriteClick} className={`property__bookmark-button ${isFavorite && authorizationStatus === AuthorizationStatus.Auth && 'property__bookmark-button--active'} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: calcRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type[0].toUpperCase() + type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => <li key={good} className="property__inside-item">{good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}

              </section>
            </div>
          </div>

          <section className="property__map map">
            {<MapOffers offers={nearbyOffers} selectedOffer={activeMapOffer} />}
          </section>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearList offers={nearbyOffers} selectMapOffer={selectMapOffer} />

            </div>
          </section>
        </div>
      </main>
    </div>
  );

}

export default PropertyScreen;

