import React from 'react';
import {render} from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  render() {
    return (
      <h1>Hello!!!!!!!!!!!</h1>
    )
  }
}