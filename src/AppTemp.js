import './assets/scss/style.scss';
import './App.scss';

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import browserHistory from './browserHistory';
// import logo from './logo.svg';
import Header from './components/Header/Header';
//
// import TestSelect from './components/Select/TestSelect';
//
// import Button from './components/Button/Button';
//
// import Checkbox from './components/Checkbox/Checkbox';
//
// import Select from './components/Select/Select';
//
// import Search from './components/Search/Search';

import MyListPage from './pages/MyListPage';
//
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
//
// import ResultListControl from './components/ResultList/Control'; // TODO: TEMP in here !!!
//
// import ResultList from './components/ResultList/ResultList';
//
import Footer from './components/Footer/Footer';
//

function App() {
  // const state = true;
  // render() {
  return (
    <Router history={browserHistory}>
      <div className="app">
        <Header className="app__header" />
        {/* <TestSelect /> */}
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/my-list" component={MyListPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer className="app__footer" />
      </div>
    </Router>
    // <div className="app">
    //   <Header className="app__header"/> */}

    //   <section className="app__main">
    //     <Button onClick={() => alert(1)}>
    //       default value
    //     </Button>
    //     <Button className={'test-class'} active={state} onClick={() => alert(2)}>
    //       {/* default value */}
    //       {state ? 'Remove from list' : 'Add to list'}
    //     </Button>

    //     <Checkbox />
    //     <Checkbox active />

    //     <Search className={'container'} />

    //     <ResultListControl className="result-list__control" />  {/* TODO: TEMP in here !!! */}
    //     <ResultList />
    //   </section>

    //   <Footer className="app__footer"/>
    // </div>
  );
  // }
}

export default App;
