import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import PropertyScreen from '../../pages/property/property';
import LoginScreen from '../../pages/login/login';
import Error404Screen from '../../pages/404/404';
import PrivateRoute from '../../components/private-route/private-route';
import {Offer} from '../../types/offer';


type AppScreenProps = {
  offersCount: number;
  offers: Offer[];
}

function App({offersCount, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offersCount = {offersCount} offers = {offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers = {offers} />
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
    </BrowserRouter>
  );
}

export default App;
