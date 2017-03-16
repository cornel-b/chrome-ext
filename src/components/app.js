import React, { Component } from 'react';
import { MostVisited } from './most_visited';

export default class App extends Component {

  render() {
    return (
       <MostVisited sites={this.props.chrome.topSites} />
    );
  }

}