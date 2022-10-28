import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from './Button';

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => console.log(data);
	console.log(errors);

	return (
		<Container onSubmit={handleSubmit(onSubmit)}>
			<div className='form-control'>
				<label htmlFor='amount'>Number of Questions</label>
				<input
					type='number'
					placeholder='amount'
					{...register('amount', { required: true, max: 50, min: 0 })}
				/>
			</div>
			<div className='form-control'>
				<label htmlFor='category'>Category</label>
				<select {...register('category', { required: true })}>
					<option value='history'>history</option>
					<option value='sports'>sports</option>
					<option value='politics'>politics</option>
				</select>
			</div>
			<div className='form-control'>
				<label htmlFor='difficulty'>Difficulty</label>
				<select {...register('difficulty', { required: true })}>
					<option value='hard'>hard</option>
					<option value='easy'>easy</option>
					<option value='medium'>medium</option>
				</select>
			</div>

			<Button type='submit'>Submit</Button>
		</Container>
	);
};

const Container = styled.form`
	background-color: white;
	border-radius: var(--radius);
	padding: 2rem;
	.form-control {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		margin: 1rem 0;
		label {
			font-weight: 500;
			font-size:1.5rem;
			margin-bottom:1.
		}
		input,
		select {
			background-color: var(--clr-background);
			width: 100%;
			padding: 0.25rem 0.5rem;
			font-size: 1.5rem;
			border-radius: var(--radius);
			border: transparent;
		}
	}
`;
export default Form;
