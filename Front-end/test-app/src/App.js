import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/data'); //  your backend API endpoint is '/api/data'
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Data from MongoDB</h1>

	  
        {data.map((item) => (
          <h2 key={item._id}>
            {item.name} 
			
          </h2>
		  
        ))}
      
	    {data.map((item) => (
          <h2 key={item._id}>
            {item.Role}
			
          </h2>
		  
        ))}
		{data.map((item) => (
          <h2 key={item._id}>
            {item.password}
			
          </h2>
		  
        ))}
      
    </div>
  );
}

export default App;
