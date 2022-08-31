import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import {AppRoute, AuthorizationStatus} from '../../consts';
import { Provider } from 'react-redux';
import LoginScreen from './login-screen';

const mockStore = configureMockStore();

describe('Component: LoginScreen', () => {
  const history = createMemoryHistory();
  history.push(AppRoute.Login);

  it('should render correctly', async () => {

    render(
      <Provider store={mockStore({
        USER: {authorizationStatus: AuthorizationStatus.Unknown},
      })}>
        <HistoryRouter history={history}>
          <LoginScreen />
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.type(screen.getByTestId('email'), 'test@test.ru');
    await userEvent.type(screen.getByTestId('password'), '123asd');
    expect(screen.getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123asd/i)).toBeInTheDocument();
  });

});
