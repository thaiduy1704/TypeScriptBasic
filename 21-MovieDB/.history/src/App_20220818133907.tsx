import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Error, HomePage, SingleMoviePage } from './pages/index';

function App() {
	return (
		<Container>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movie/:id' element={<SingleMoviePage />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Container>
	);
}

const Container = styled(Router)``;
export default App;
