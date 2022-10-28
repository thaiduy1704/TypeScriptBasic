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
	position:absolute;
  top:50%;
  left:50%;
  transform:tranlate()
`;

export default Loading;
