import React from 'react';

export interface IPerson {
	id: number;
	image: string;
	name: string;
	title: string;
	quote: string;
	position: string;
}
const SingleInfo = ({ id, image, name, title, quote }: IPerson) => {
	return <div>{name}</div>;
};

export default SingleInfo;
