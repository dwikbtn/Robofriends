import React from 'react';
import Card from './Card';
const CardList = ({ Robots }) => { 
	return (
	<div>
	{
		Robots.map((user, i) => {
			return (
			<Card 
			key={1} 
			id={Robots[i].id} 
			name={Robots[i].name} 
			email={Robots[i].email} 
				/>
			);
		})
	}
	</div>

	);
}

export default CardList