import React from 'react';

export interface ICategories {
	categories: string[];
}

const Category = ({ categories }: ICategories) => {
	return <div>Category</div>;
};

export default Category;
