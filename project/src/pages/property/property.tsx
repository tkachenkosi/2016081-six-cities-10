import React, {useState, useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import ReviewForm from '../../components/form/form';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearList from '../../components/near-list/near-list';
import ImagesGallery from '../../components/images-gallery/images-gallery';
import MapOffers from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import {fetchReviewsAction, fetchNearbyOffersAction, fetchRoomOfferAction} from '../../store/api-actions';
import {Offer, Review} from '../../types/offer';
import {AppRoute, AuthorizationStatus, INIT_OFFER} from '../../consts';
import {calcRating} from '../../utils';
import {store} from '../../store/index';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  // основной оффер
  useEffect(() => {
    store.dispatch(fetchRoomOfferAction(params.id));
  }, [params.id]);
  // комментарии
  useEffect(() => {
    store.dispatch(fetchReviewsAction(params.id));
  }, [params.id]);
  // офферы радом
  useEffect(() => {
    store.dispatch(fetchNearbyOffersAction(params.id));
  }, [params.id]);

  const [activeMapOffer, setActiveMapOffer] = useState<Offer | null>(null);
  const selectMapOffer = useCallback((offer: Offer | null) => setActiveMapOffer(offer), []);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const roomOffer: Offer = useAppSelector((state) => state.roomOffer);
  const reviews: Review[] = useAppSelector((state) => state.reviews);
  const nearbyOffers: Offer[] = useAppSelector((state) => state.nearbyOffers);
  const {title, price, type, rating, images, goods, host, description, bedrooms, maxAdults, isPremium} = roomOffer;

  useEffect(() => {
    if (!roomOffer || roomOffer.id === INIT_OFFER.id) {
      navigate(AppRoute.NotFound);
    }
  }, [params.id]);

  return (
    <div className="page">
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
                <button className="property__bookmark-button button" type="button">
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

