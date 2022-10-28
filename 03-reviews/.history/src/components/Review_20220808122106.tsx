import React from 'react';
import styled from 'styled-components';
import { IoMdQuote } from 'react-icons/io';
import { FcPrevious, FcNext } from 'react-icons/fc';

export interface ReviewType {
	id: number;
	name: string;
	job: string;
	image: string;
	text: string;
}

export interface ReviewFuntion {
	nextPage: () => void;
	prevPage: () => void;
	randomPage: () => void;
}

const Review: React.FC<ReviewType & ReviewFuntion> = ({
	id,
	name,
	job,
	image,
	text,
	nextPage,
	prevPage,
	randomPage,
}) => {
	return <Wrapper>
        <div className='image'></div>

    </Wrapper>;
};
const Wrapper = styled.div`



`;
export default Review;
