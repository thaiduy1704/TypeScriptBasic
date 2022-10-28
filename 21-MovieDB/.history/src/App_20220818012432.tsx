import styled from 'styled-components';

function App() {
	return Error;
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
