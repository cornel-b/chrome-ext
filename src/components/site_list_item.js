import React, { Component } from 'react';

const SiteListItem = ({site}) => {
  return <li><a href="{site.url}"><span class="tab"><img src="https://www.google.com/s2/favicons?domain={site.url}" width="20" /></span></a></li>
}

export default SiteListItem;