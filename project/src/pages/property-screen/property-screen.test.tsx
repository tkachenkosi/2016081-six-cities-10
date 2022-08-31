
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus } from '../../consts';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import {mockOffer, mockReview} from '../../mocks-test';
import PropertyScreen from './property-screen';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const roomOffer = mockOffer;
const nearbyOffers = [mockOffer];
const reviews = [mockReview];

describe('Component: PropertyScreen', () => {
  it('should render correctly', () => {

    render(
      <Provider store={mockStore({
        DATA: {roomOffer: roomOffer, nearbyOffers: nearbyOffers, reviews: reviews},
        USER: {authorizationStatus: AuthorizationStatus.Unknown},
      })}
      >
        <HistoryRouter history={history}>
          <PropertyScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('property-page')).toBeInTheDocument();
  });
});
