import './App.css';
import { useState, useEffect } from 'react';
import Category from './components/Category.jsx';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      });
  }, []);

  const handleCategoryClick = (id) => {
    fetch(`http://localhost:3001/products?catId=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const renderCategories = () => {
    return categories.map(result => (
      <Category key={result.id} product={result} onCategoryClick={() => handleCategoryClick(result.id)} />
    ));
  };

  const renderProducts = () => {
    return products.map(result => (
      <div key={result.id}>{result.title}</div>
    ));
  }

  return (
    <>
      <header>My Store</header>
      <section>
        <nav>
          {categories && renderCategories()}
        </nav>
        <article>
          <h3>Products</h3>
          {products && renderProducts()}
        </article>
      </section>
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
