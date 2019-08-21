import './ResultList.scss';
import { connect } from 'react-redux'
// import ResultListControl from './Control'; // TODO: TEMP in here !!!
import Result from '../Result/Result'; // TODO: TEMP in here !!!

import React from 'react';

const ResultList = ({ className = '', searchList }) => {
  console.log(searchList);
  

  return (
    <main className={className}>
      <section className={`${className} result-list`}>
        <Result className="result-list__result" />
      </section>
    </main>
  )
};

const mapStateToProps = (state) => ({
  searchList: state.searchList
})

export default connect(mapStateToProps)(ResultList);
