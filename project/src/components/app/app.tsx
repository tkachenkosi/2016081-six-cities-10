import React, {useEffect} from 'react';
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
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getLoadedDataStatus} from '../../store/data-process/selectors';
import {checkAuthAction, fetchOffersAction, fetchFavotiresAction} from '../../store/api-actions';
import {store} from '../../store/index';


const isUnknownAuthStatus = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  useEffect(() => {
    store.dispatch(fetchOffersAction());
    store.dispatch(checkAuthAction());
    store.dispatch(fetchFavotiresAction());
  }, []);

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
          path={AppRoute.Favorite}
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
          path={AppRoute.NotFound}
          element={<Error404Screen />}
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
