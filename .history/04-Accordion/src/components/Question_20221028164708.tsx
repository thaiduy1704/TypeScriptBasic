import React from 'react';

export interface IQuestion {
	id: number;
	title: string;
	info: string;
}

const Question = ({ id, title, info }: IQuestion) => {
	return <div>Question</div>;
};

const Wrapper = styled.article`
	padding: 2rem;
	box-shadow: var(--light-shadow);
	margin-bottom: 2rem;
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		button {
			color: #c87691;
			background-color: var(--clr-btn);
			padding: 1rem;
			border-radius: 100%;
			border: none;
			font-size: 2rem;
			width: 4rem;
			height: 4rem;
			text-align: center;
			cursor: pointer;
		}
		h3 {
			font-size: 2rem;
			margin: 0;
		}
		p {
			color: #324d67;
		}
	}
`;
export default Question;
