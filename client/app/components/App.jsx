import React, { Component } from 'react';
import { render } from 'react-dom';
import Search from './Search.jsx';
import ItemCard from './ItemCard.jsx';
import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      rootURL: 'https://api.donorschoose.org/common/json_feed.html?keywords=',
      proposals: {},
    }
  }

  search(e) {
    if (e.key === 'Enter') {
      const query = document.getElementsByClassName('input-field')[0].value.split(' ').join('+');
      this.fetchUrl(query);
    }
  }

  click(e, url) {
    window.open(url, '_blank');
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

  render() {
    return (
      <div className='container'>
        <Search search={ this.search }/>
        <ItemCard proposals={ this.state.proposals } link={ this.click }/>
      </div>
    );
  }
}