import './Header.scss'
import React from 'react'
import GitHubSearchLogo from '../../assets/img/github-search-logo.svg';


const Header = ({}) => (
  <header class="header">
    <a href="/" class="link">
      <img class="header__logo" src={GitHubSearchLogo} />
    </a>
    <div class="header__item header__control">
      <a class="link link_tdn header__link header__link_active" href="/search">Search</a>
      <a class="link link_tdn header__link" href="/my-list">My list</a>
    </div>
  </header>
)

export default Header;