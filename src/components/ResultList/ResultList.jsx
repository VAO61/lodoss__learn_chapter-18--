import './ResultList.scss';
import '../../assets/scss/_container.scss'; // TODO: Temp?
import ResultListControl from './Control'; // TODO: TEMP in here !!!

import React from 'react';

const ResultList = ({}) => (
  <section className="container">
    <ResultListControl className="result-list__control" />  {/* TODO: TEMP in here !!! */}
    {/* <ResultItem /> */}
  </section>
);

export default ResultList;
