import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';


export default class Search extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='search-box'>
        <input className='input-field' placeholder='Start here...' onKeyPress={ e => this.props.search(e) }></input>
        <div>Enter any Location, Subject, School Name, or try any keyword...</div>
      </div>
    );
  }
}