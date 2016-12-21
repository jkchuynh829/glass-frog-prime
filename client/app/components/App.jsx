import React, { Component } from 'react';
import { render } from 'react-dom';
import Search from './Search.jsx';
import ItemCard from './ItemCard.jsx';
import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.addProposal = this.addProposal.bind(this);
    this.state = {
      rootURL: 'https://api.donorschoose.org/common/json_feed.html?keywords=',
      proposals: {},
      schoolName: '',
      title: '',
      teacherName: '',
      city: '',
      state: '',
      totalPrice: '',
      costToComplete: '',
      percentage: '',
      expiration: '',
    }
  }

  search(e) {
    if (e.key === 'Enter') {
      const query = document.getElementsByClassName('input-field')[0].value.split(' ').join('+');
      this.fetchUrl(query);
    }
  }

  fetchUrl(query) {
    const queryString = `${this.state.rootURL}`;
    fetch(`${this.state.rootURL}${query}&sortBy=1`)
    .then((data) => data.json())
    .then((data) => {
      this.setState({
        proposals: data.proposals
      });
    });
  }

  addProposal(proposalObj) {
    console.log('ADD PROPOSAL!!!!! APP LEVEL');
    fetch('/manage', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proposalObj)
    });
  }
  

  render() {
    return (
      <div className='container'>
        <Search search={ this.search }/>
        <ItemCard proposals={ this.state.proposals } create={ this.addProposal }/>
      </div>
    );
  }
}