import { Component } from 'react';

export default class TestComponentB extends Component {
  render() {
    const name = 'aaa';
    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }
}
