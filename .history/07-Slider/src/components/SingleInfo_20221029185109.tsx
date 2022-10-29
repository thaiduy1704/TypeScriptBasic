import React from 'react';

export interface IPerson {
	id: number;
	image: string;
	name: string;
	title: string;
	quote: string;
}
const SingleInfo = ({ id, image, name, title, quote }: IPerson) => {
	return <div>SingleInfo</div>;
};

export default SingleInfo;
