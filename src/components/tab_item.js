import React, { Component } from 'react';

export class TabItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { display: true };
  }

  makeTabActive(tabId) {
    chrome.tabs.update(tabId, { active: true })
  }

  closeTab(tabId) {
    chrome.tabs.remove(tabId);
    this.setState({ display: false });
  }

  render() {
    if (this.state.display) {
      let keyName = "tab_" + this.props.site.index;
      return (
        <li data-id={this.props.site.id}>
          <span className="switch-tab" key={keyName} onClick={() => this.makeTabActive(this.props.site.id)}>
            {this.props.site.title}
          </span>
          &nbsp; <span className="close-tab" onClick={() => this.closeTab(this.props.site.id)}>x</span>
        </li>
      );
    } else {
      return false;
    }
  }
}
