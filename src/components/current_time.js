import React, { Component } from 'react';

export class CurrentTime extends React.Component {

    constructor() {
        super();
        this.state = { timeString: '' };
    }

    componentDidMount() {
        setInterval(this.countDown.bind(this), 100);
    }

    countDown() {
        let date = new Date();
        let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
        let minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        this.setState({ timeString: hour + ':' + minute });
    }

    render() {
        return (
            <div id="current-time">
                {this.state.timeString}
            </div>
        )
    }

}