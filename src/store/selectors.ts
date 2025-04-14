import { State } from '../types/state';

const selectError = (state: State) => state.error;
const selectCity = (state: State) => state.city;
const selectSortOption = (state: State) => state.sortOption;
const selectOfferPreviews = (state: State) => state.offerPreviews;
const selectOfferPreviewsLoadingStatus = (state: State) => state.isOfferPreviewsLoading;
const selectAuthorizationStatus = (state: State) => state.authorizationStatus;

export { selectError, selectCity, selectSortOption, selectOfferPreviews, selectOfferPreviewsLoadingStatus, selectAuthorizationStatus };
