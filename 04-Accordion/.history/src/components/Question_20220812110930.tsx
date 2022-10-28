import React,{useState} from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styled from 'styled-components';

export interface TypeQuestion {
	id: number;
	title: string;
	info: string;
}

const Question: React.FC<TypeQuestion> = ({ id, title, info }) => {
	const [showMore, setShowMore] = useState<Boolean>(false)
	const handleShowMore = ()=>{
		setShowMore(!sh)
	}
	return (
		<Wrapper>
			<header>
				<h3>{title}</h3>
				<button onClick={()}></button>
			</header>
		</Wrapper>
	);
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
