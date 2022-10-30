import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Loading } from './components';
import { Error, HomePage } from './page';

function App() {
	return (
		<Container>
			<Routes>
				<Router>
					<Route path='/' element={<HomePage />} />
				</Router>
			</Routes>
		</Container>
	);
}

const Container = styled(Router)``;
export default App;
