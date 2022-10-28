import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
	children: ReactNode;
	color?: string;
	backgroundColor?: string;
}

const Button: React.FC<IButton> = ({ children, color, backgroundColor }) => {
	return (
		<Container color={color} backgroundColor={backgroundColor}>
			{children}
		</Container>
	);
};
interface Props {
	color?: string;
	backgroundColor?: string;
}
const Container = styled.button<Props>`
	color: ${(props) => (props.color ? props.color : 'black')};
	background-color: ${(props) => (props.backgroundColor?};
	padding: 1rem 2rem;
	border-radius: var(--radius);
`;
export default Button;
