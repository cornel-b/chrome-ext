import React, { Component } from 'react';

export class SiteListItem extends React.Component {

  render() {
    return (
      <li>
        <a href={this.props.site.url}>
          <span className="tab">
              <img src={"https://www.google.com/s2/favicons?domain=" + this.props.site.url} width="20" />
          </span>
        </a>
      </li>
    );
  }
}
