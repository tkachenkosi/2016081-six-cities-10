import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';


function HeaderLogout(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <Link to={AppRoute.Login} className="header__nav-link">
            <span className="header__signout">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderLogout;
