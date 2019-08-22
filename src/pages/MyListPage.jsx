import React, { Fragment } from 'react';
// import Search from '../components/Search/Search';
import ResultList from '../components/ResultList/ResultList';
import ResultListControl from '../components/ResultList/Control';

const SearchPage = ({ className = '' }) => (
  <Fragment>
    <h1 className="container">My List</h1>
    {/* <Search className={`${className} container`} /> */}
    <ResultListControl className="result-list__control container" />{' '}
    <ResultList className={'app__main container'} />
  </Fragment>
);

export default SearchPage;
