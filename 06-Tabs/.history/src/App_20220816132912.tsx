import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ClockLoader } from 'react-spinners';
import { MdDoubleArrow } from 'react-icons/md';

const url: string = 'https://course-api.com/react-tabs-project';

interface Job {
	id: string;
	order: number;
	dates: string;
	title: string;
	company: string;
	duties: string[];
}

function App() {
	const [loading, setLoading] = useState<Boolean>(true);
	const [jobs, setJobs] = useState<Job[]>([]);
	const [indexValue, setIndexValue] = useState<number>(1);

	const setIndexJobs = (id: number) => {
		setIndexJobs(id);
	};

	const fetchData = async (url: string) => {
		try {
			setLoading(true);
			const response = await axios(url);
			setJobs(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData(url);
	}, []);
	if (loading) {
		return (
			<Wrapper>
				<div className='loading'>
					<ClockLoader size={90} color='#2caeba' />
				</div>
			</Wrapper>
		);
	}

	const { title, dates, duties, company } = jobs[indexValue];

	return (
		<Wrapper>
			<div className='title'>
				<h1>Experience</h1>
				<div className='underline'></div>
			</div>

			<div className='content'>
				<div className='tab'>
					{jobs.map((job, index) => {
						return (
							<button
								className='btn'
								onClick={() => {
									setIndexJobs(index);
								}}
								key={job.id}>
								{job.company}
							</button>
						);
					})}
				</div>
				<div className='info'>
					<h3>{title}</h3>
					<h4>{company}</h4>
					<h5>{dates}</h5>
					<ul className='duties'>
            {duties.map((duty,index))}
          </ul>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	margin: 8rem auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	.title {
		text-align: center;
		margin-bottom: 5rem;
	}
	h1 {
		font-size: 4rem;
	}
	.underline {
		background-color: var(--clr-primary);
		width: 10rem;
		height: 4px;
		margin-inline: auto;
	}
	.loading {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.content {
		display: grid;
		grid-gap: 7rem;
		grid-template-columns: 20rem 1fr;
		padding: 0 10rem;

		.tab {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			button {
				font-size: 2.5rem;
				background-color: transparent;
				border: transparent;
				margin-bottom: 2.5rem;
				padding-left: 3rem;
				cursor: pointer;
			}
			.active {
				color: var(--clr-primary);
				border-left: 2px solid var(--clr-primary);
			}
		}
		.info {
			h3 {
				font-size: 3rem;
				font-weight: 300;
			}
			h4 {
				font-size: 1.5rem;
				display: inline-block;
				padding: 0.5rem 1rem;
				border-radius: var(--radius);
				color: #617d98;
				background-color: #dae2ec;
			}
			h5 {
				font-size: 1.2rem;
				letter-spacing: 0;
				color: var(--clr-text);
			}
			.duties {
				margin-top: 2rem;
				list-style: none;
				li {
					display: flex;
					justify-content: center;
					align-items: center;
					color: black;

					font-size: 1.8rem;
					letter-spacing: 1px;
					margin-bottom: 2rem;

					span {
						font-size: 2rem;
						color: var(--clr-primary);
						margin-right: 2rem;
					}
				}
			}
		}
	}
	@media only screen and (max-width: 1200px) {
		.content {
			grid-template-columns: 1fr;
			.tab {
				flex-direction: row;
				button {
					padding: 1rem 1rem;
				}
				.active {
					border-left: none;
					border-bottom: 2px solid var(--clr-primary);
				}
			}
		}
	}
`;
export default App;
