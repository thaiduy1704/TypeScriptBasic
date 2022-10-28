import React from 'react';

export interface TypeQuestion {
	id: number;
	title: string;
	info: string;
}

const Question: React.FC<TypeQuestion> = ({
	id
}) => {
	return <div>Question</div>;
};

export default Question;
