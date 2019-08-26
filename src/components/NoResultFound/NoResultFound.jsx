import './NoResultFound.scss';
import GitHubLogo from '../../assets/img/github-logo.svg';

import React from 'react';

const NoResultFound = ({ className }) => (
  <main className={className}>
    <section class="container no-results">
      <div class="no-results__container">
        <img class="no-results__bg" src={GitHubLogo} alt="GitHub logo" />
        <div class="*no-results__desc">
          <p class="no-results__title">No results found</p>
          <p class="no-results__desc">select other parameters and try again</p>
        </div>
      </div>
    </section>
  </main>
);

export default NoResultFound;
