import '../NoResultFound/NoResultFound.scss';
import GitHubLogo from '../../assets/img/github-logo.svg';
import { Link } from 'react-router-dom';

import React from 'react';
const NoResultFound = ({ className }) => {
  return (
    <main className={className}>
      <section class="container no-results">
        <div class="no-results__container">
          <img class="no-results__bg" src={GitHubLogo} alt="GitHub logo" />
          <div class="*no-results__desc">
            <p class="no-results__title">Favorites list is empty</p>
            <p class="no-results__desc">
              <Link class="link" to="/search">
                Choose
              </Link>
              &nbsp;any repo and try again
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NoResultFound;