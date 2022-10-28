import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
	children: ReactNode;
	color: string;
	backgroundColor: string;
}

const Button: React.FC<IButton> = ({ children, color, backgroundColor }) => {
	return (
		<Container color={color} backgroundColor={backgroundColor}>
			{children}
		</Container>
	);
};
interface Props {
	color: string;
	backgroundColor;
}
const Container = styled.button`
	color: ${(props) => props.color};
	padding: 1rem 2rem;
	border-radius: var(--radius);
`;
export default Button;
