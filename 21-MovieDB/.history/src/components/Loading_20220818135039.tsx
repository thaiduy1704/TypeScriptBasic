import { RingLoader } from 'react-spinners';

import styled from 'styled-components';

const Loading = () => {
	return (
		<Container>
			<RingLoader color='blue' size={70} />
		</Container>
	);
};
const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: tranlateX(-50%);
	z-index: 99999;
`;

export default Loading;
