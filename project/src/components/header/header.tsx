import React from 'react';
import {AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks';
import Logo from '../logo/logo';
import HeaderLogin from '../header-login/header-login';
import HeaderLogout from '../header-logout/header-logout';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {authorizationStatus === AuthorizationStatus.Auth ? <HeaderLogin /> : <HeaderLogout />}
        </div>
      </div>
    </header>
  );
}

export default Header;
