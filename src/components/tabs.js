import React, { Component } from 'react';
import { TabItem } from './tab_item';

export class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sites: [] };
  }

  componentDidMount() {
    this.props.sites.getAllInWindow(null, (tabs) => {
        this.setState({ sites: tabs });
    });
  }

  render() {
    if (this.state.sites && this.state.sites.length > 0) {
      return (
          <ul className="tab-list">
          {
            this.state.sites.map(function (site) {
                let keyName = "bookmark_" + site.url
                return <TabItem key={keyName} site={site} />;
            })
          }
          </ul>
      );
    }

    return <div></div>;
  }
}
