import { Review } from '../../types/offer';
import { getMockAuthStatus } from '../../mock/auth-status-mock';
import { isUserLoggedIn } from '../../utils';
import OfferReviewItem from './offer-review-item';
import ReviewForm from '../review-form';

type OfferReviewsProps = {
  reviews: Review[];
};

const isLoggedIn = isUserLoggedIn(getMockAuthStatus());

function OfferReviews(props: OfferReviewsProps): JSX.Element {
  const { reviews } = props;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <OfferReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {isLoggedIn ? <ReviewForm /> : null}
    </section>
  );
}

export default OfferReviews;
