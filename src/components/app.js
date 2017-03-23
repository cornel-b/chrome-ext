import React, { Component } from 'react';
import { MostVisited } from './most_visited';
import { Bookmarks } from './bookmarks';
import { Tabs } from './tabs';
import { Timer } from './timer';

export default class App extends Component {

  render() {
    return (
      <div>
          <MostVisited sites={this.props.chrome.topSites} />
          <Bookmarks sites={this.props.chrome.bookmarks} />
          <Tabs chrome={this.props.chrome} sites={this.props.chrome.tabs} />
          <Timer seconds="1500" />
      </div>
    );
  }

}