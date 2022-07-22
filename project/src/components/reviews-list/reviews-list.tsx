
import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {Review} from '../../types/offer';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList ({reviews} : ReviewsListProps) {

  return (
    <ul className="reviews__list">
      {reviews.map((review: Review) => <ReviewsItem key={review.id} review={review} />)}
    </ul>
  );
}

export default ReviewsList;
