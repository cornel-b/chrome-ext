import React, { Component } from 'react';

export class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            time: 0,
            seconds: 0,
            buttonTitle: 'Start'
        };
        this.intervalId = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        this.setState({
            seconds: this.props.seconds
        });
    }

    startTimer() {
        if (this.intervalId == 0) {
            this.intervalId = setInterval(this.countDown, 1000);
            this.setState({ 'buttonTitle': 'Pause' });
        } else {
            let res = clearInterval(this.intervalId);
            this.setState({ 'buttonTitle': 'Start' });
            this.intervalId = 0;
        }
    }

    formatSeconds(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = seconds - (min * 60);
        return ((min > 0) ? min + "m " : "") + sec + "s";
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: seconds,
            seconds: seconds,
        });
        if (seconds == 0) {
            clearInterval(this.timeLeft);
        }
        document.title = this.formatSeconds(this.state.time);
    }

    render() {
        return (
            <div className="timer">
                <button className="timerButton" onClick={this.startTimer}>{this.state.buttonTitle}</button>
                <div>{this.formatSeconds(this.state.time)}</div>
            </div>
        )
    }

}