import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
	children: ReactNode;
	color: string;
}

const Button: React.FC<IButton> = ({ children, color }) => {
	return <Container color={color}>{children}</Container>;
};
interface Props {
	color: string;
}
const Container = styled.button`
color:${{}}
`;
export default Button;
