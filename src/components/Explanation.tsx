import React from 'react';

export default function Explanation(props: any) {
	const word = props.data[0];

	const explanation = word.meanings.map((meaning: any) => {
		return (
			<div className='part-of-speech' key={Math.random() * 1000}>
				<h3>{meaning.partOfSpeech}</h3>
				<p>
					{meaning.definitions
						.map((definition: any) => definition.definition)
						.join(' ')}
				</p>
				{meaning.synonyms.length > 0 && (
					<>
						<h4>Synonyms</h4>
						<p>{meaning.synonyms.join(', ')}</p>
					</>
				)}
				{meaning.antonyms.length > 0 && (
					<>
						<h4>Antonyms</h4>
						<p>{meaning.antonyms.join(', ')}</p>
					</>
				)}
			</div>
		);
	});

	return (
		<div className='explanation'>
			<h1 className='title'>{word.word}</h1>
			{word.phoentic && <h2 className='phonetic'> {word.phonetic}</h2>}

			{explanation}
		</div>
	);
}
