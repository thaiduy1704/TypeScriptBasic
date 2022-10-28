import React from 'react';

export interface CategoriesType {
	categories: string[];
}

const Category: React.FC<CategoriesType> = (categories) => {
	return { categories };
	
};

export default Category;
