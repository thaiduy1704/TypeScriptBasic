import React from 'react';

export interface IReview {
	id: number;
	name: string;
	job: string;
	image: string;
	text: string;
	prevPage: () => void;
	nextPage: () => void;
	randowPage: () => void;
}
const Review = ({
	id,
	name,
	job,
	image,
	text,
	nextPage,
	prevPage,
	randowPage,
}: IReview) => {
	return <div>Review</div>;
};

export default Review;
