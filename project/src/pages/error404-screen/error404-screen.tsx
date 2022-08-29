import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import Logo from '../../components/logo/logo';

function Error404Screen(): JSX.Element {
  return (
    <section style={{backgroundColor:'#f0f0f0',textAlign:'center',fontFamily:'Tahoma'}}>
      <div style={{margin:'5px 15px'}}><Logo /></div>
      <h1 style={{color:'#c83349'}}>ОШИБКА 404</h1>
      <h2>ЗАПРАШИВАЕМЫЙ РЕСУРС НЕ НАЙДЕН</h2>
      <p style={{color:'blue'}}><Link to={AppRoute.Root}>Вернуться на главную страницу</Link></p>
    </section>
  );
}

export default Error404Screen;
