import axios from 'axios';
import React, { useState } from 'react';

const url: string = 'https://course-api.com/react-tabs-project';

interface Job {
	id: string;
	order: number;
	dates: string;
	title: string;
	company: string;
	duties: string[];
}

function App() {
	const [loading, setLoading] = useState<Boolean>(true);
	const [jobs, setJobs] = useState<Job[]>([]);

	const fetchData = async (url: string) => {
		try {
			setLoading(true);
			const response = await axios(url);
			setJobs(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return <h1>ThaiDuy</h1>;
}

export default App;
