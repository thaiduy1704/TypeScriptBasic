import { RingLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = () => {
	return (
		<Container>
			<RingLoader color='' />
		</Container>
	);
};

const Container = styled.div``;

export default Loading;
