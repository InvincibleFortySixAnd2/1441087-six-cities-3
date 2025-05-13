import { render, screen, fireEvent } from '@testing-library/react';
import { getMockAppStore, getMockOfferPreviews } from '../../utils/mock-utils';
import { withProviders, withStore } from '../../utils/mock-components';
import { OfferCardType } from './offer-card-utils';
import { OfferPreview } from '../../types/offer-types';
import OfferCard from './offer-card';

type propsType = {
  cardType: OfferCardType;
  offerPreview: OfferPreview;
  onHover: (hoveredOffer: OfferPreview | null) => void;
};

describe('Component: OfferCard', () => {
  const mockOfferPreview = getMockOfferPreviews()[0];
  const mockAppStore = getMockAppStore();
  const mockOnHover = vi.fn();

  it('should render correctly with all props', () => {
    const props: propsType = {
      cardType: 'Cities',
      offerPreview: mockOfferPreview,
      onHover: mockOnHover
    };

    const withProvidersComponent = withProviders(<OfferCard {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText(mockOfferPreview.title)).toBeInTheDocument();
    expect(screen.getByText(`€${mockOfferPreview.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockOfferPreview.title)).toHaveAttribute('src', mockOfferPreview.previewImage);
  });

  it('should show premium mark when isPremium is true', () => {
    const premiumOffer = { ...mockOfferPreview, isPremium: true };
    const props: propsType = {
      cardType: 'Cities',
      offerPreview: premiumOffer,
      onHover: mockOnHover
    };

    const withProvidersComponent = withProviders(<OfferCard {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('should not show premium mark when isPremium is false', () => {
    const nonPremiumOffer = { ...mockOfferPreview, isPremium: false };
    const props: propsType = {
      cardType: 'Cities',
      offerPreview: nonPremiumOffer,
      onHover: mockOnHover
    };

    const withProvidersComponent = withProviders(<OfferCard {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.queryByText('Premium')).not.toBeInTheDocument();
  });

  it('should call onHover with offer on mouse enter', () => {
    const props: propsType = {
      cardType: 'Cities',
      offerPreview: mockOfferPreview,
      onHover: mockOnHover
    };

    const withProvidersComponent = withProviders(<OfferCard {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    fireEvent.mouseEnter(screen.getByRole('article'));
    expect(mockOnHover).toHaveBeenCalledWith(mockOfferPreview);
  });

  it('should call onHover with null on mouse leave', () => {
    const props: propsType = {
      cardType: 'Cities',
      offerPreview: mockOfferPreview,
      onHover: mockOnHover
    };

    const withProvidersComponent = withProviders(<OfferCard {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    fireEvent.mouseLeave(screen.getByRole('article'));
    expect(mockOnHover).toHaveBeenCalledWith(null);
  });
});
