import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, TokenKey} from '../../consts';
import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {getToken} from '../../services/token';
import {getCountFavorites} from '../../store/data-process/selectors';

function HeaderLogin(): JSX.Element {
  const dispatch = useAppDispatch();
  const count = useAppSelector(getCountFavorites);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorite} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{getToken(TokenKey.Email)}</span>
            <span className="header__favorite-count">{count}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link onClick={(evt) => {evt.preventDefault();dispatch(logoutAction());}} to={AppRoute.Root} className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderLogin;
