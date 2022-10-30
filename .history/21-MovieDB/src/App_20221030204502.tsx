import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Loading } from './components';
import { Error, HomePage, SingleMovie } from './page';

function App() {
	return (
		<Container>
			<Routes>
				<Router>
					<Route path='/' element={<HomePage />} />
					<Route path = 'movie/:id/' element={<SingleMovie/>}>
					<Route/>
				</Router>
			</Routes>
		</Container>
	);
}

const Container = styled(Router)``;
export default App;
