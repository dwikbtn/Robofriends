import React from 'react';

const SearchBox = () => {
	return (
		<div className='pa2'> {/*pa 2= padding 2 perasal dari tachon*/} 
			<input
			className='pa3 ba b--green bg-lightest-blue'
			type="search" 
			placeholder='Search robots'/>
		</div>
	);
}

export default SearchBox;