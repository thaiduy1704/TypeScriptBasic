import React from 'react';

interface ISingleInfo {
	id: number;
	image: string;
	name: string;
	title: string;
	quote: string;
}

const SingleInfo: React.FC<ISingleInfo> = ({id,ima}) => {
	return <div>SingleInfo</div>;
};

export default SingleInfo;
