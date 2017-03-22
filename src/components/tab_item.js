import React, { Component } from 'react';

export class TabItem extends React.Component {

  render() {
    return (
      <li data-id={this.props.site.id}>
        <span className="switch-tab">
          {this.props.site.title}
        </span>
        <span className="close-tab">x</span>
      </li>
    );
  }
}
