import React, { Component } from 'react';
import { MostVisited } from './most_visited';
import { Bookmarks } from './bookmarks';

export default class App extends Component {

  render() {
    return (
      <div>
       <MostVisited sites={this.props.chrome.topSites} />
       <Bookmarks sites={this.props.chrome.bookmarks} />
      </div>
    );
  }

}