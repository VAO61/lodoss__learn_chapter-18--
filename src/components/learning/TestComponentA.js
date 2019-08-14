import React, { Component } from 'react';

export default class TestComponentA extends Component {
  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Viktor',
      lastName: 'Orlov'
    };

    const name = user.firstName;

    const element = (
      <section>
        <p>My name is {formatName(user)}</p>
      </section>
    );

    const anotherElement = React.createElement(
      'h2',
      { className: 'some-class-name' },
      'Some h2 text'
    );

    return (
      <div className="aaa">
        <h1>{name}</h1>
        {element}
        {anotherElement}
      </div>
    );
  }
}
