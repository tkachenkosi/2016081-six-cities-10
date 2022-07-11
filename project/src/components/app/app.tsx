import MainScreen from '../../pages/main/main';
// import FavoritesScreen from '../../pages/favorites/favorites';
// import PropertyScreen from '../../pages/property/property';
// import LoginScreen from '../../pages/login/login';


type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offersCount = {offersCount} />
  );
}

export default App;
