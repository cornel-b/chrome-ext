import React, { Component } from 'react';
import SiteListItem from './site_list_item';

class MostVisited extends React.Component {

  getSites(fn) {
      const sites = this.props.sites.get(function(sites) {
        var list = sites.map(function(site)  {
          return <SiteListItem site={site} />
        });
        fn(list);
      });

      return sites;
  };

  render() {
      return this.getSites(function(result) {
          return result;
      });
  }

}

export default MostVisited;