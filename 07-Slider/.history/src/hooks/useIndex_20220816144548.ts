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
	let prevIndex = index - 1;
    let nextIndex = index + 1;
    if (prevIndex < 0) prevIndex = maxLength;
		if (nextIndex > maxLength) nextIndex = 0;

    return [index,]    
};
