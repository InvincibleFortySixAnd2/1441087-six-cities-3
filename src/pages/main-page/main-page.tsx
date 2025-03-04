import { getMockOfferPreviews } from '../../mock/offers-mock';
import { CURRENT_OFFERS_COUNT } from '../../const';
import Header from '../../components/header/header';
import TabsCities from '../../components/tabs-cities/tabs-cities';
import PlaceCard from '../../components/place-card/place-card';

type MainPageProps = {
  offersCount: number;
};

const offerPreviews = getMockOfferPreviews(CURRENT_OFFERS_COUNT);

export default function MainPage({ offersCount }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <TabsCities />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offerPreviews.map((offerPreview) => (
                  <PlaceCard
                    key={offerPreview.id}
                    title={offerPreview.title}
                    type={offerPreview.type}
                    price={offerPreview.price}
                    isPremium={offerPreview.isPremium}
                    previewImage={offerPreview.previewImage}
                    rating={offerPreview.rating}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
