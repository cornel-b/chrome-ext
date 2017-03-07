import React, { Component } from 'react';
import SiteListItem from './site_list_item'

class MostVisited extends React.Component {

  getSites() {
      const sites = this.props.sites.get(function(sites) {
        var list = sites.map(function(site)  {
          return <SiteListItem site={site} />
        });
      });
  };

  render() {
    return (
      <div>Most visited websites</div>
    );
  }

}

export default MostVisited;