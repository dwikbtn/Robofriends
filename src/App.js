import React, { Component } from 'react';
import CardList from './CardList';
import { Robots } from './Robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			Robots: Robots,
			searchField: ''
		};
	}

	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		let robots = this.state.Robots;
		// let searchField = this.state.searchField;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList Robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
