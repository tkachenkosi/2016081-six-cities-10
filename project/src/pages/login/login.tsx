import React, {useEffect, useRef, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {store} from '../../store/index';
import {AppRoute, AuthorizationStatus, CITIES} from '../../consts';
import {redirectToRoute, setSelectCity} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Logo from '../../components/logo/logo';
import {loginAction, fetchFavotiresAction} from '../../store/api-actions';
import {getRandomInteger} from '../../utils';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwdRef = useRef<HTMLInputElement | null>(null);

  const validatePasswd = (passwd: string) => passwd.match(/[A-Za-z]/) !== null && passwd.match(/[0-9]/) !== null;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const randomCity = Object.values(CITIES)[getRandomInteger(0, Object.values(CITIES).length - 1)];

  const onClickChangeCity = () => {
    store.dispatch(setSelectCity(randomCity));
    store.dispatch(redirectToRoute(AppRoute.Root));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth){
      store.dispatch(fetchFavotiresAction());
      store.dispatch(redirectToRoute(AppRoute.Root));
    }
  }, [authorizationStatus]);


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwdRef.current) {
      if (validatePasswd(passwdRef.current.value)) {
        dispatch(loginAction({login: loginRef.current.value, password: passwdRef.current.value}));
      } else {
        toast.error('Password должен содержать символы и цифры');
      }
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwdRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link onClick={onClickChangeCity} to={'/'} className="locations__item-link">
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default LoginScreen;
