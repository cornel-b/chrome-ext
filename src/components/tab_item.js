import React, { Component } from 'react';

export class TabItem extends React.Component {

  render() {
    return (
      <li data-id={this.props.site.id}>
        <span className="switch-tab" onClick={chrome.tabs.update(this.props.site.id, {active: true})}>
          {this.props.site.title}
        </span>
        &nbsp; <span className="close-tab">x</span>
      </li>
    );
  }
}
