import React from 'react';
import {render} from 'react-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  fixString(str) {
    if (str.match(/&#034;/g)) return str.replace(/&#034;/g, '\"');
    if (str.match(/&#039;/g)) return str.replace(/&#039;/g, '\'');
    if (str.match(/&amp;/g)) return str.replace(/&amp;/g, '\&');
    return str;
  }

  render() {
    const data = this.props.proposals;
    console.log(data);
    const keys = Object.keys(data);
    const proposals = [];
    keys.forEach((key, i) => {

      const url = data[key].proposalURL;
      const img = data[key].imageURL;
      const title = this.fixString(data[key].title);
      const city = data[key].city;
      const state = data[key].state;
      const teacher = data[key].teacherName;
      const school = this.fixString(data[key].schoolName);
      const shortDesc = data[key].shortDescription;

      const proposalObj = {
        schoolName: school,
        title: title,
        teacherName: teacher,
        city: city,
        state: state,
        totalPrice: data[key].totalPrice,
        costToComplete: data[key].costToComplete,
        percentage: `${Math.round(100 * (data[key].costToComplete / data[key].totalPrice), 2)}%`,
        expiration: data[key].expirationDate,
      }

      const itemCard = (
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
      
      proposals.push(itemCard);
    });
    return (
      <div className='proposal-container'>
        { proposals }
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