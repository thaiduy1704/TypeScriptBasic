import React from 'react';

export interface HSL {
	h: number;
	s: number;
	l: number;
}

export const hslToHex = ({ h, s, l }: HSL) => {
	s /= 100;
	l /= 100;
};
