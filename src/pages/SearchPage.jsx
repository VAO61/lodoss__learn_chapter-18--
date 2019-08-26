import React, { Fragment } from 'react';
import Search from '../components/Search/Search';
import NoResultFound from '../components/NoResultFound/NoResultFound';
import ResultList from '../components/ResultList/ResultList';
import ResultListControl from '../components/ResultList/Control';
import { connect } from 'react-redux';

const SearchPage = ({ className = '', searchList, theme }) => (
  <Fragment>
    <Search className={`${className} container`} />
    {searchList.length === 0 ? (
      <NoResultFound className={'app__main'} />
    ) : (
      <Fragment>
        <ResultListControl className="result-list__control container" />{' '}
        <ResultList
          className={'app__main container'}
          list={searchList}
          theme={theme}
        />
      </Fragment>
    )}
  </Fragment>
);

const mapStateToProps = state => ({
  searchList: state.searchList.slice(0, 6),
  theme: state.theme
});

export default connect(mapStateToProps)(SearchPage);
