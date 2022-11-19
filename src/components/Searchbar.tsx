import React, { FC, useState } from 'react';

export default function Searchbar(props: any) {
	const [searchQuery, setSearchQuery] = useState('');

	function updateSearchQuery(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchQuery(event.target.value);
	}

	return (
		<>
			<form
				className='form'
				onSubmit={(event) => {
					event.preventDefault();
					props.search(searchQuery);
					props.handleSubmit();
				}}
			>
				<input
					id='search-bar'
					type='text'
					onChange={(event) => updateSearchQuery(event)}
					value={searchQuery}
					placeholder={props.firstSearchedWord}
				/>
				<button id='search-btn'>search</button>
			</form>
		</>
	);
}
