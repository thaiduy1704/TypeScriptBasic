import { RingLoader } from 'react-spinners';

import styled from 'styled-components';

const Loading = () => {
	return (
		<Container>
			<RingLoader />
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Loading;
