import './ResultList.scss';
// import ResultListControl from './Control'; // TODO: TEMP in here !!!
import Result from '../Result/Result'; // TODO: TEMP in here !!!

import React from 'react';

const ResultList = ({ className = '' }) => (
  <main className={className}>
    <section className={`${className} result-list`}>
      <Result className="result-list__result" />
    </section>
  </main>
);

export default ResultList;
