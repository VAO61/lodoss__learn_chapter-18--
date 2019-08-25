import React, { Fragment } from 'react';
import Search from '../components/Search/Search';
import NoResult from '../components/NoResult/NoResult';
import ResultList from '../components/ResultList/ResultList';
import ResultListControl from '../components/ResultList/Control';
import { connect } from 'react-redux';

const SearchPage = ({ className = '', searchList }) => (
  <Fragment>
    <Search className={`${className} container`} />
    {/* <NoResult className={'app__main'} /> if searchList.length */}
    <ResultListControl className="result-list__control container" />{' '}
    <ResultList className={'app__main container'} list={searchList} />
  </Fragment>
);

const mapStateToProps = state => ({
  searchList: state.searchList.slice(0, 6)
});

export default connect(mapStateToProps)(SearchPage);
