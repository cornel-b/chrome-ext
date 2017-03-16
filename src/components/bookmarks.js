import React, { Component } from 'react';
import { SiteListItem } from './site_list_item';

export class Bookmarks extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sites: [] };
  }

  componentDidMount() {
    this.props.sites.search('a', (sites) => {
      this.setState({ sites: sites.slice(0, 10) });
    });
  }

  render() {
    if (this.state.sites && this.state.sites.length > 0) {
      return (
        <ul className="bookmarks">
          {
            this.state.sites.map(function (site) {
                let keyName = "bookmark_" + site.url
              return <SiteListItem key={keyName} site={site} />;
            })
          }
        </ul>
      );
    }

    return <div></div>;
  }
}