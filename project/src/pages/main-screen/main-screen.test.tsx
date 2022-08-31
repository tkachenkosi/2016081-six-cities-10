import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus } from '../../consts';
import { Provider } from 'react-redux';
import { mockOffer, mockCityName } from '../../mocks-test';
import MainScreen from './main-screen';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const offers = [mockOffer];

describe('Component: MainScreen', () => {
  it('should render correctly', () => {

    render(
      <Provider store={mockStore({
        DATA: {offers: offers},
        APP_USING: {city: mockCityName},
        USER: {authorizationStatus: AuthorizationStatus.Unknown},
      })}
      >
        <HistoryRouter history={history}>
          <MainScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
