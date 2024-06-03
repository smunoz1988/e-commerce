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
    <>
    <header>My Store</header>
    <section>
      <nav>
        {
          results.map((result) => (
            <div key={result.id}>{result.title}</div>
        ))
        }
      </nav>
      <article>
        main area
      </article>
    </section>
    <footer>
      footer
    </footer>
    </>
  );
}

export default App;
