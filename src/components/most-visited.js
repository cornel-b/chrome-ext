import React, { Component } from 'react';
import { SiteListItem } from './site_list_item';

export class MostVisited extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sites: [] };
  }

  componentDidMount() {
    this.props.sites.get((sites) => {
      this.setState({ sites: sites });
    });
  }

  render() {
    if (this.state.sites && this.state.sites.length > 0) {
      return (
        <ul>
          {
            this.state.sites.map(function (site) {
              return <SiteListItem key={site.url} site={site} />;
            })
          }
        </ul>
      );
    }

    return <div>Loading...</div>;
  }
}