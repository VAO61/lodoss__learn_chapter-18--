import './Header.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GitHubSearchLogo from '../../assets/img/github-search-logo.svg';
import classNames from 'classnames';

const Header = ({ className = '' }) => (
  /**
   * TODO: Utility 'classNames' usage
   * https://github.com/JedWatson/classnames
   */
  <header className={classNames(className, 'header')}>
    <Link to="/" className="link">
      <img className="header__logo" alt="header logo" src={GitHubSearchLogo} />
    </Link>
    {/* <a href="/" class="link">
      <img class="header__logo" alt="header logo" src={GitHubSearchLogo} />
    </a> */}
    <div className="header__item header__control">
      <NavLink to="/search" className="link link_tdn header__link">
        Search
      </NavLink>
      {/* <a class="link link_tdn header__link header__link_active" href="/search">Search</a> */}
      <NavLink to="/my-list" className="link link_tdn header__link">
        My list
      </NavLink>
      {/* <a class="link link_tdn header__link" href="/my-list">My list</a> */}
    </div>
  </header>
);

export default Header;
