import './Header.scss';
import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GitHubSearchLogo from '../../assets/img/github-search-logo.svg';


const Header = ({
  className = '',
}) => (
    <header className={`${className} header`}>
    {/* <Link to="/" className="link"><img class="header__logo" src={GitHubSearchLogo}></img></Link> */}
    <a href="/" class="link">
      <img class="header__logo" alt="header logo" src={GitHubSearchLogo} />
    </a>
    <div class="header__item header__control">
      <a class="link link_tdn header__link header__link_active" href="/search">Search</a>
      <a class="link link_tdn header__link" href="/my-list">My list</a>
    </div>
  </header>
)

export default Header;