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


  const fetchData =async (url:type) => {
    
  }

	return <h1>ThaiDuy</h1>;
}

export default App;
