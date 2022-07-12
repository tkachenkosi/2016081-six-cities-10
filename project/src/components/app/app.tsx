import MainScreen from '../../pages/main/main';
// import FavoritesScreen from '../../pages/favorites/favorites';
// import PropertyScreen from '../../pages/property/property';
// import LoginScreen from '../../pages/login/login';
// import Error404Screen from '../../pages/404/404';


type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offersCount = {offersCount} />
  );
}

export default App;
