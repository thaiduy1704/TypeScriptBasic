import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
	children: ReactNode;
	color: string;
}

const Button = () => {
	return <div>Button</div>;
};

const Container = styled.button``;
export default Button;
