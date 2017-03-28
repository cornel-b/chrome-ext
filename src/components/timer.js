import React, { Component } from 'react';

export class Timer extends React.Component {

    constructor() {
        super();
        this.state = { time: 0, seconds: 0 };
        this.timeLeft = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        this.setState({ 
            time: this.state.seconds, 
            seconds: this.props.seconds 
        });
    }

    startTimer() {
        if (this.timeLeft == 0) {
            this.timeLeft = setInterval(this.countDown, 1000);
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
    }

    render() {
        return (
            <div className="timer">
                <button className="timerButton" onClick={this.startTimer}>Start</button>
                <div>{this.formatSeconds(this.state.time)}</div>
            </div>
        )
    }

}
