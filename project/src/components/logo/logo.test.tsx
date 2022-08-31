import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus } from '../../consts';
import { Provider } from 'react-redux';
import Logo from './logo';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <Logo />
      </HistoryRouter>
    );

    expect(screen.getByTestId('logo-component')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
