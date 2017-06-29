import React, { Component } from 'react';
import './App.css';

export class Clock extends Component {
	constructor(props) {
		super(props)

		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}

	}

	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}

	leadingZero(num) {
		return num < 10 ? '0' + num : num;
	}


	getTimeUntil = (deadline) => {
		let time = Date.parse(deadline) - Date.parse(new Date());
		let seconds = Math.floor((time / 1000) % 60);
		let minutes = Math.floor((time / 60000) % 60);
		let hours = Math.floor(time / (1000 * 60 * 60) % 24);
		let days = Math.floor(time / 86400000);

		this.setState({
			days,
			hours,
			minutes,
			seconds
		})


	}
	render() {
		return (
			<div className="counter__time-wrap">
				<div className="counter__days">Days: {this.leadingZero(this.state.days)}</div>
				<div className="counter__hours">Hours: {this.leadingZero(this.state.hours)}</div>
				<div className="counter__minutes">Minutes: {this.leadingZero(this.state.minutes)}</div>
				<div className="counter__seconds">Seconds: {this.leadingZero(this.state.seconds)}</div>
			</div>
		)
	}
}

export default Clock;