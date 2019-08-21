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
        {searchList.map(item => (
          <Result className="result-list__result" key={item.id} {...item} />
        ))}
      </section>
    </main>
  )
};

const mapStateToProps = (state) => ({
  searchList: state.searchList.slice(0, 6)
})

export default connect(mapStateToProps)(ResultList);
