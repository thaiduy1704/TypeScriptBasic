interface ApiEndPoint {
	amount: number;
	category: number;
	difficulty: 'easy ' | 'medium' | 'hard';
}

interface IQuestion {
	question: string;
	correct_answer: string;
	incorrect_answer: string;
}

export { ApiEndPoint, Question };
