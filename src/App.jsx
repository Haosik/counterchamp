import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

export class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			newDeadline: '',
			deadline: 'December 25, 2017'
		}
	}
	newDeadlineHandler = (e) => {
		this.setState({
			newDeadline: e.target.value
		})
	}
	setDeadlineHandler = () => {
		this.setState({
			deadline: this.state.newDeadline
		})
	}
	render() {
		return (
			<div className="counter__wrap">
				<h4 className="counter__heading">Countdown to {this.state.deadline}</h4>
				<Clock deadline={this.state.deadline} />
				<Form inline  className="form counter__form" action="#">
					<InputGroup>
						<FormControl onChange={(e) => this.newDeadlineHandler(e)} className="form-control" name="deadlineInput" type="text" placeholder="Enter new date" />
						<InputGroup.Button><Button onClick={() => this.setDeadlineHandler()}>Submit</Button></InputGroup.Button>
					</InputGroup>
				</Form>
			</div>
		)
	}
}

export default App;