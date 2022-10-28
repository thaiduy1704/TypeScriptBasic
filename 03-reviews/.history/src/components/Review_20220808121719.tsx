import React from 'react';
import styled from 'styled-components';
import { IoMdQuote } from 'react-icons/io';
import { FcPrevious, FcNext } from 'react-icons/fc';

export interface ReviewType {
	id: number;
	name: string;
	jov: string;
	image: string;
	text: string;
}

export interface ReviewFuntion {
	nextPage: () => void;
	nextPage: () => void;

}

const Review = () => {
	return <Wrapper></Wrapper>;
};
const Wrapper = styled.div``;
export default Review;
