import React, {useState, FormEvent, ChangeEvent} from 'react';
import {useParams} from 'react-router-dom';
// import {ReviewLimits} from '../../consts';

function ReviewForm(): JSX.Element {
  const params = useParams();

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);


  const onChangeRatingHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };


  const onChangeCommentHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const onSubmitHandle = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    // console.log(comment, rating);
    setComment('');
    setRating(0);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review {params.id}</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={onChangeRatingHandle} checked={rating === 5} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onChangeRatingHandle} checked={rating === 4} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onChangeRatingHandle} checked={rating === 3} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onChangeRatingHandle} checked={rating === 2} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onChangeRatingHandle} checked={rating === 1} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>

      <textarea onChange={onChangeCommentHandle} value={comment} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button onClick={onSubmitHandle} className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>

  );
}


export default ReviewForm;
