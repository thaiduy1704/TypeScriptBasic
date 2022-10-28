import React, { useState } from 'react';

export const useIndex = (
	intitalNumber: number,
	maxLength: number
): [number, number, number, any] => {
	const [index, setIndex] = useState(intitalNumber);
	if (index < 0) {
		setIndex(maxLength);
	}
	if (index > maxLength) {
		setIndex(0);
	}
    
};
