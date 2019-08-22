import './ResultList.scss';
import { connect } from 'react-redux';
import Result from '../Result/Result';

import React from 'react';
/**
 * TODO: : ___ ? searchList : myList
 */
// const ResultList = ({ className = '', searchList }) => {
const ResultList = ({ className = '', myList }) => {
  // console.log(searchList);

  return (
    <main className={className}>
      <section className={`${className} result-list`}>
        {/* {searchList.map(item => ( */}
        {myList.map(item => (
          <Result className="result-list__result" key={item.id} {...item} />
          // <ResultTile className="result-list__result" key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
};

const mapStateToProps = state => ({
  // searchList: state.searchList.slice(0, 6)
  myList: state.myList.slice(0, 6)
});

export default connect(mapStateToProps)(ResultList);
