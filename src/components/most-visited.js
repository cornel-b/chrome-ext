import React, { Component } from 'react';

import SiteListItem from './site_list_item'


const MostVisited = (props) => {
  console.log(props.sites);

/* chrome.topSites.get(function(sites) {
    sites = sites.slice(0, 12);
    sites.forEach(function(element) {
        $("#most-visited").append('<li><a href="' + element.url + '"><span class="tab"><img src="https://www.google.com/s2/favicons?domain=' + element.url + '" width="20" /></span></a></li>');
    }, this);
});*/

  const sites = props.sites.get(function(sites) {
    sites.forEach(function(element) {
      console.log(element);
      return <SiteListItem site={element} />
    }, this);
  });

  return sites;

  /*const siteItems = sites.map((site) => {
    return <SiteListItem site={site} />
  });*/

   /*return (
      <div>!!Most visited websites!!</div>
    );*/
}

export default MostVisited;