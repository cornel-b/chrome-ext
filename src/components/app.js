import React, { Component } from 'react';
import MostVisited from './most-visited';

export default class App extends Component {
  render() {
    return (
       <MostVisited sites={this.props.chrome.topSites} />
    );
  }
}
