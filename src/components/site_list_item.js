import React, { Component } from 'react';

export default class SiteListItem extends Component {
  render() {
    return (
      <li><a href="{props.site.url}"><span class="tab"><img src="https://www.google.com/s2/favicons?domain={props.site.url}" width="20" /></span></a></li>
    );
  }
}
