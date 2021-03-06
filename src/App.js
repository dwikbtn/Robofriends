import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			Robots: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({Robots:users}))
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
		if (this.state.Robots.length === 0){
			return	<h1>LOADING</h1>
		} else {
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList Robots={filteredRobots} />
				</Scroll>
			</div>
		);}
	}
}

export default App;
