import React, { Component } from 'react';
import CardList from './CardList';
import {Robots} from './Robots';
import SearchBox from './SearchBox';


class App extends Component {
	constructor() {
		super()
		this.state = {
			Robots: Robots,
			searchField: ''	
		}
	}

	onSearchChange = (event) => {
		const filteredRobots = this.state.Robots.filter(Robot => {
			return Robots.name.toLowerCase().includes(this.searchField.toLowerCase());
			})
		console.log(filteredRobots);
		}
	render(){
		return (
			<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList Robots={this.state.Robots}/>
			</div>
	);	
	}
}


export default App;