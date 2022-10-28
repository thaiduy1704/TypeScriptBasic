import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
export interface TypeQuestion {
	id: number;
	title: string;
	info: string;
}

const Question: React.FC<TypeQuestion> = ({ id, title, info }) => {
	return <div>Question</div>;
};

export default Question;
