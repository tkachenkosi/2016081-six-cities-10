import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import PropertyScreen from '../../pages/property/property';
import LoginScreen from '../../pages/login/login';
import LoadingScreen from '../loading-screen/loading-screen';
import Error404Screen from '../../pages/404/404';
import PrivateRoute from '../../components/private-route/private-route';
import {useAppSelector} from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


const isUnknownAuthStatus = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {

  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isUnknownAuthStatus(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path="*"
          element={<Error404Screen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
