import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/categories')
    .then(response => response.json())
    .then(data => {
      setResults(data);
    })
  }, [])

  return (
    <div className="App">
      {results.map((result) => (
        <div key={result.id}>
          {result.title}
        </div>
      )
      )}
    </div>
  );
}

export default App;
