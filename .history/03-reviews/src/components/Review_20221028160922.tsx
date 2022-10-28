import React from 'react';

export interface IReview {
	id: number;
	name: string;
	job: string;
	image: string;
	text: string;
}
const Review = ({ id, name, job, image, text }: IReview) => {
	return <div>Review</div>;
};

export default Review;
