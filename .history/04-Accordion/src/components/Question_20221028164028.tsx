import React from 'react';

export interface IQuestion {
	id: number;
	title: string;
	info: string;
}

const Question = ({ id, title, info }: IQuestion) => {
	return <div>Question</div>;
};

export default Question;
