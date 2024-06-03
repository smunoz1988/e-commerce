import './App.css';
import { useState, useEffect } from 'react';
import Category from './components/Category.jsx';

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/categories')
    .then(response => response.json())
    .then(data => {
      setResults(data);
    })
  }, [])

  const renderCategories = () => {
    return results.map((result) => (
      <Category key={result.id} product={result} />
    ))
  }

  return (
    <>
    <header>My Store</header>
    <section>
      <nav>
        {
        results && renderCategories()
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
