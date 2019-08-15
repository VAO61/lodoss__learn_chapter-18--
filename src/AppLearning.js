import './styles/main.scss';
import React from 'react';
import logo from './logo.svg';
import TestComponentA from './components/learning/TestComponentA';
// import TestComponentB from './components/learning/TestComponentB'
import Button from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
        <Button onClick={() => alert(1)}>
          Test button
        </Button>
        <Button className={'test-class'} active={true} onClick={() => alert(2)}>
          Test button 2
        </Button>
        <Button className={'test-class'} active onClick={() => alert(3)}>
          Test button 3
        </Button>
      <TestComponentA />
      {/* <TestComponentB /> */}
    </div>
  );
}

export default App;
