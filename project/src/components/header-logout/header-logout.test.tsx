import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus } from '../../consts';
import { Provider } from 'react-redux';
import HeaderLogout from './header-logout';

const history = createMemoryHistory();

describe('Component: HeaderLogout', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <HeaderLogout />
      </HistoryRouter>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
