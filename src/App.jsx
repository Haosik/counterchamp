import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

export class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			newDeadline: '',
			deadline: 'December 25, 2017',
			validDeadline: true
		}
	}

	newDeadlineHandler = (e) => {
		this.setState({
			newDeadline: e.target.value
		});
	};

	setDeadlineHandler = (e) => {
		e.preventDefault();
		if (Date.parse(this.state.newDeadline)) {
			this.setState({
				validDeadline: true,
				deadline: this.state.newDeadline
			})
		} else {
			this.setState({
				validDeadline: false
			});
		}
	};
	render() {
		return (
			<div className="counter__wrap container">
				<h4 className="counter__heading">Countdown to {this.state.deadline}</h4>
				<Clock deadline={this.state.deadline} />
				<Form inline onSubmit={(e) => this.setDeadlineHandler(e)} className="form counter__form" action="">
					<InputGroup>
						<FormControl onChange={(e) => this.newDeadlineHandler(e)} className="form-control" name="deadlineInput" type="text" placeholder="Enter new date" />
						<InputGroup.Button><Button onClick={(e) => this.setDeadlineHandler(e)}>Submit</Button></InputGroup.Button>
					</InputGroup>
					{this.state.validDeadline ? <div></div> : <div className="counter__error">Please, enter some valid Date! (e.g. November 25 2017)</div>}
				</Form>
			</div>
		)
	}
}

export default App;