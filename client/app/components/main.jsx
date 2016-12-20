import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';

const Main = () => {
  return (
    <App/>
  );
}

render(<Main/>, document.getElementById('app'));