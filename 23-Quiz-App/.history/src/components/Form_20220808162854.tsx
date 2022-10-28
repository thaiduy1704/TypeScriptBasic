import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => console.log(data);
	console.log(errors);

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div></div>
				<input
					type='number'
					placeholder='amount'
					{...register('amount', { required: true, max: 50, min: 0 })}
				/>
				<select {...register('category', { required: true })}>
					<option value='history'>history</option>
					<option value='sports'>sports</option>
					<option value='politics'>politics</option>
				</select>
				<select {...register('difficulty', { required: true })}>
					<option value='hard'>hard</option>
					<option value='easy'>easy</option>
					<option value='medium'>medium</option>
				</select>

				<input type='submit' />
			</form>
		</Container>
	);
};

const Container = styled.form`

`;
export default Form;
