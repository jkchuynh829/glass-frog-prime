import React from 'react';
import {render} from 'react-dom';

export default class Manager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.proposals;
    const keys = Object.keys(data);
    const proposals = [];
    keys.forEach((key, i) => {

    });
    return (
      <div className='proposal-container'>
        { proposalsList }
      </div>
    );
  }
}

const link = {
  textDecoration: 'none',
  color: '#000'
}

const infoStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '4px',
  fontSize: '10px'
}

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '11px'
}

const locationStyle = {
  color: '#777'
}