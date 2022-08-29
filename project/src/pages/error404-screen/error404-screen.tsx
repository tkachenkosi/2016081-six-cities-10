import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import Logo from '../../components/logo/logo';
import './error404-screen.css';

function Error404Screen(): JSX.Element {
  return (
    <section className="error-section">
      <div className="error-logo"><Logo /></div>
      <h1 className="error-title">ОШИБКА 404</h1>
      <h2>ЗАПРАШИВАЕМЫЙ РЕСУРС НЕ НАЙДЕН</h2>
      <p className="error-link"><Link to={AppRoute.Root}>Вернуться на главную страницу</Link></p>
    </section>
  );
}

export default Error404Screen;
