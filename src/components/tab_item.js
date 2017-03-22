import React, { Component } from 'react';

export class TabItem extends React.Component {

  render() {
    return (
      <li data-id={this.props.tab.id}>
        <span class="switch-tab">
          tab.title
        </span>
        <span class="close-tab">x</span>
      </li>
    );
  }
}
