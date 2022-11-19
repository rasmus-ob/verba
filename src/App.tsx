import { useState, useEffect, useRef } from 'react';
import Searchbar from './components/Searchbar';
import Explanation from './components/Explanation';
import ErrorMessage from './components/ErrorMessage';

export default function App() {
	const FIRST_SEARCHED_WORD = 'welcome';
	const [search, setSearch] = useState(FIRST_SEARCHED_WORD);
	const [wordData, setWordData] = useState([]);
	const explanationStartRef: any = useRef(null);

	function updateSearch(query: string): void {
		setSearch(query);
	}

	function scrollToExplanation() {
		if (explanationStartRef && explanationStartRef.current) {
			explanationStartRef.current.scrollIntoView();
		}
	}

	useEffect(() => {
		async function fetchWord(): Promise<any> {
			const response = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
			);
			return await response.json();
		}

		fetchWord()
			.then((data) => {
				setWordData(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [search]);

	return (
		<main className='container'>
			<Searchbar
				search={updateSearch}
				firstSearchedWord={FIRST_SEARCHED_WORD}
				handleSubmit={scrollToExplanation}
			/>
			{wordData[0] ? (
				<>
					<Explanation data={wordData} />
					<div ref={explanationStartRef}></div>
				</>
			) : (
				<>
					(
					<ErrorMessage
						message={`sorry the word "${search}" couldn't be found`}
					/>
					<div ref={explanationStartRef}></div>)
				</>
			)}
		</main>
	);
}
