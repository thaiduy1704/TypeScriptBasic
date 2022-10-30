import { RingLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = () => {
	return (
		<Container>
			<RingLoader color='#1ea7fd' />
		</Container>
	);
};

const Container = styled.div``;

export default Loading;
