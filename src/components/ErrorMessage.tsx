import React from 'react';

export default function ErrorMessage(props: any) {
	return (
		<h1 className='explanation' id='error'>
			*{props.message}*
		</h1>
	);
}
