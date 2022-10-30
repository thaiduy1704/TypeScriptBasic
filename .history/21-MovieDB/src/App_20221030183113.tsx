import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Error, HomePage } from './page';

function App() {
	return (
		<Container>
			{/* <Error /> */}

			{/* <HomePage /> */}
			<Loading />
		</Container>
	);
}

const Container = styled(Router)``;
export default App;
