import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import PropertyScreen from '../../pages/property/property';
import LoginScreen from '../../pages/login/login';
import LoadingScreen from '../loading-screen/loading-screen';
import Error404Screen from '../../pages/404/404';
import PrivateRoute from '../../components/private-route/private-route';
import {Offer} from '../../types/offer';
import {Review} from '../../types/offer';
import {useAppSelector} from '../../hooks';

type AppScreenProps = {
  // offersCount: number;
  offers: Offer[];
  reviews: Review[];
}


const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

// function App({offersCount, offers, reviews}: AppScreenProps): JSX.Element {
function App({offers, reviews}: AppScreenProps): JSX.Element {

  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen offers = {offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen offers={offers} reviews={reviews} />}
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
    </BrowserRouter>
  );
}

export default App;
