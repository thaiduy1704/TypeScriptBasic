import styled from 'styled-components';
import { loremIpsum, ILoremIpsumParams, LoremIpsum } from 'lorem-ipsum';
import { useState, ChangeEvent } from 'react';
import { log } from 'console';
enum Units {
	word = 'word',
	paragraphs = 'paragraphs',
	sentences = 'sentences',
}

function App() {
	const [configLorem, setConfigLorem] = useState<ILoremIpsumParams>({
		count: 2, // Number of "words", "sentences", or "paragraphs"
		format: 'plain', // "plain" or "html"
		paragraphLowerBound: 3, // Min. number of sentences per paragraph.
		paragraphUpperBound: 7, // Max. number of sentences per paragarph.
		random: Math.random, // A PRNG function
		sentenceLowerBound: 5, // Min. number of words per sentence.
		sentenceUpperBound: 15, // Max. number of words per sentence.
		suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
		units: Units.paragraphs, // paragraph(s), "sentence(s)", or "word(s)"
	});

	const [content, setContent] = useState<string>('');

	const changeHandle = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const name = e.target.id;
		const value = name === 'unit'? e.target.value:;
	};

	const genterateLorem = () => {
		setContent(loremIpsum(configLorem));
	};

	return (
		<Container>
			<h1>Lorem Ipsum Generator</h1>
			<InputContainer>
				<Label htmlFor='count'>Count: </Label>
				<Input id='count' type='number' onChange={changeHandle} />
				<Label htmlFor='paragraphLowerBound'>Paragraph Lower Bound </Label>
				<Input id='paragraphLowerBound' type='number' />
				<Label htmlFor='paragraphUpperBound'>Paragraph Upper Bound</Label>
				<Input id='paragraphUpperBound' type='number' />
				<Label htmlFor='sentenceLowerBound'>Sentence Lower Bound </Label>
				<Input id='sentenceLowerBound' type='number' />
				<Label htmlFor='count'>Sentence Upper Bound </Label>
				<Input id='count' type='number' />
				<Label htmlFor='units'>Units</Label>
				<select name='units' id='units'>
					<option value='words'>Words</option>
					<option value='sentences'>Sentences</option>
					<option value='paragraphs'>Paragraphs</option>
				</select>
				<Button
					onClick={() => {
						genterateLorem();
					}}>
					Generate
				</Button>
			</InputContainer>
			<Content>
				{content.split('\n').map((item, id) => {
					return <p key={id}>{item}</p>;
				})}
			</Content>
		</Container>
	);
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 5rem;
	select {
		background-color: white;
		padding: 0.5rem;
		border: none;
		font-size: 2rem;
		margin-inline: 1rem;
	}
`;

const Button = styled.button`
	font-size: 2rem;
	font-weight: bold;
	letter-spacing: 3px;
	text-transform: uppercase;
	background-color: #49a6e9;
	padding: 1rem 1.5rem;
	border: none;
	border-radius: var(--radius);
	transition: var(--transition);
	margin-inline: 5rem;
	cursor: pointer;

	:hover {
		background-color: #a5d5f8;
	}
`;

const InputContainer = styled.div`
	max-width: 80vw;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: left;
`;

const Input = styled.input`
	background-color: white;
	padding: 0.5rem;
	border: none;
	font-size: 2rem;
	margin: 1rem;
`;

const Label = styled.label`
	color: #063251;
	font-style: 2.5rem;
	font-weight: 500;
	margin: 1rem;
`;

const Content = styled.section`
	text-align: center;
	max-width: 70vw;
	margin-top: 10rem;

	p {
		margin-top: 2rem;
		font-size: 3rem;
	}

	@media only screen and (max-width: 1200px) {
		max-width: 90vw;
	}
`;
export default App;
