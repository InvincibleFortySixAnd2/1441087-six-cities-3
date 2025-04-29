import { OfferPreviews } from '../../../types/offer-types';
import { APIRoute } from '../../../const/api-const';
import createAppAsyncThunk from '../../create-app-async-thunk';

export const getOffersPreviews = createAppAsyncThunk<
  OfferPreviews,
  undefined
>('offers/getOfferPreviews', async (_arg, { extra: api }) => {
  const response = await api.get<OfferPreviews>(APIRoute.Offers);
  return response.data;
});

export const getFavoriteOffers = createAppAsyncThunk<
  OfferPreviews,
  undefined
>('offers/getFavoriteOffers', async (_arg, { extra: api }) => {
  const response = await api.get<OfferPreviews>(APIRoute.Favorite);
  return response.data;
});
