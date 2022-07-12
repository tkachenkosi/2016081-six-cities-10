// import {Link} from 'react-router-dom';
// import {AppRoute} from '../../consts';
import Logo from '../../components/logo/logo';

function Error404Screen(): JSX.Element {
  return (
    // <p><Link to={AppRoute.Root}>Вернуться на главную страницу</Link></p>
    <section className="page">
      <Logo />
      <h2>ОШИБКА 404  ЗАПРАШИВАЕМЫЙ РЕСУРС НЕ НАЙДЕН</h2>
    </section>
  );
}

export default Error404Screen;
