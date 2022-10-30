import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Loading } from './components';
import { Error, HomePage, SingleMovie } from './page';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='movie/:id/' element={<SingleMovie />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
