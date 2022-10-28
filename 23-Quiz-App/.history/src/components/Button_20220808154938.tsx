import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
	children: ReactNode;
	color: string;
}

const Button:React.FC< = () => {
	return(
        <Container>
            {chil}
        </Container>
    )
};

const Container = styled.button``;
export default Button;
