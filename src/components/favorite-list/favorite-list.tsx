import { OfferPreview } from '../../types/offer';
import { getCitiesNames, getCitiesWithFavorites, getCityFavorites } from '../../utils';
import FavoriteListItem from './favorite-list-item';

type FavoriteListProps = {
  offerPreviews: OfferPreview[];
};

function FavoriteList(props: FavoriteListProps): JSX.Element {
  const { offerPreviews } = props;
  const citiesNames = getCitiesNames();
  const citiesWithFavorites = getCitiesWithFavorites(citiesNames, offerPreviews);

  return (
    <ul className="favorites__list">
      {citiesWithFavorites.map((city) => (
        <FavoriteListItem
          key={city}
          city={city}
          offerPreviews={getCityFavorites(city, offerPreviews)}
        />
      ))}
    </ul>
  );
}

export default FavoriteList;
