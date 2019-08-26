import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import EmptyMyList from '../components/EmptyMyList/EmptyMyList';
import ResultListControl from '../components/ResultList/Control';
import ResultList from '../components/ResultList/ResultList';

const MyListPage = ({ className = '', myList, theme }) => (
  <Fragment>
    <h1 className="container">My List</h1>
    {myList.length === 0 ? (
      <EmptyMyList className={'app__main'} />
    ) : (
      <Fragment>
        <ResultListControl className="result-list__control container" />{' '}
        <ResultList
          className={'app__main container'}
          list={myList}
          theme={theme}
        />
      </Fragment>
    )}
  </Fragment>
);

const mapStateToProps = state => ({
  myList: state.myList.slice(0, 6),
  theme: state.theme
});

export default connect(mapStateToProps)(MyListPage);
