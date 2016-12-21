import React from 'react';
import {render} from 'react-dom';

export default class Manager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.savedProposals;
    const proposalsList = [];
    data.forEach((data, i) => {
      const schoolName = data.schoolName;
      const title = data.title;
      const teacherName = data.teacherName;
      const city = data.city;
      const state = data.state;
      const totalPrice = data.totalPrice;
      const costToComplete = data.costToComplete;
      const percentage = data.percentage;
      const expiration = data.expiration;
      const savedCard = (
        <div className='item-card' key={i} onClick={ e => this.props.create(proposalObj) }>
          <div>
            <img className='img' src={img}/>
          </div>
          <div style={infoStyle}>
            <span style={titleStyle}>{title}</span>
            <span className='teacher' style={locationStyle}>{teacher}'s Class</span>
            <span style={locationStyle}>{school}, {city}, {state}</span>
            <span>{shortDesc}</span>
          </div>
        </div>
      );
      proposalsList.push(savedCard);
    });
    return (
      <div className='savedProposal-container'>
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