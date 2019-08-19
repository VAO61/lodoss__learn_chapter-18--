import React, { Fragment } from 'react';
import Search from '../components/Search/Search';
import ResultList from '../components/ResultList/ResultList';
import ResultListControl from '../components/ResultList/Control';

const SearchPage = ({ }) => (
  <Fragment>
    <Search className={'container'} />
    <ResultListControl className="result-list__control container" />  {/* TODO: TEMP in here !!! */}
    <ResultList />
  </Fragment>
)

export default SearchPage;