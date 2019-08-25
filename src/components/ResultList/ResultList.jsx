import './ResultList.scss';
import Result from '../Result/Result';
import ResultTile from '../ResultTile/ResultTile';
import React from 'react';
/**
 * TODO: : ___ ? searchList : myList
 */
// const ResultList = ({ className = '', searchList }) => {
const ResultList = ({ className = '', list }) => {
  // console.log(searchList);

  return (
    // <NoResult />
    <main className={className}>
      <section className={`${className} result-list-tile`}>
        {' '}
        {/* if {tile} */}
        {/* {searchList.map(item => ( */}
        {list.map(item => (
          <Result className="result-list__result" key={item.id} {...item} />
          // <ResultTile
          //   className="result-list-tile__result"
          //   key={item.id}
          //   {...item}
          // />
        ))}
      </section>
    </main>
  );
};

export default ResultList;
