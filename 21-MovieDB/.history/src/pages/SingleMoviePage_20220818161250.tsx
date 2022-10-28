import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import second from '../features
'

const SingleMoviePage = () => {
	const id = useParams();
	const { movieInfo, isLoading } = useAppSelector((store) => store.movie);
	return <div>SingleMoviePage</div>;
};

export default SingleMoviePage;
