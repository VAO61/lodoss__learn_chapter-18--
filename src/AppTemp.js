import './assets/scss/style.scss';
import React from 'react';
// import logo from './logo.svg';
import Button from './components/Button/Button';
//
import Checkbox from './components/Checkbox/Checkbox';
//
import Select from './components/Select/Select';
//
import ResultList from './components/ResultList/ResultList';
//

function App() {
  const state = true;

  return (
    <div className="App">
      <Button onClick={() => alert(1)}>
        default value
      </Button>
      <Button className={'test-class'} active={state} onClick={() => alert(2)}>
        {/* default value */}
        {state ? 'Remove from list' : 'Add to list'}
      </Button>

      <Checkbox />
      <Checkbox active />

      <Select />
      <ResultList />
    </div>
  );
}

export default App;
