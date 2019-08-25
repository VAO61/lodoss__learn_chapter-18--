import React, { Fragment } from 'react';
import ResultList from '../components/ResultList/ResultList';
import ResultListControl from '../components/ResultList/Control';
import { connect } from 'react-redux';

const MyListPage = ({ className = '', myList, theme }) => (
  <Fragment>
    <h1 className="container">My List</h1>
    <ResultListControl className="result-list__control container" />{' '}
    <ResultList className={'app__main container'} list={myList} theme={theme} />
  </Fragment>
);

const mapStateToProps = state => ({
  myList: state.myList.slice(0, 6),
  theme: state.theme
});

export default connect(mapStateToProps)(MyListPage);
