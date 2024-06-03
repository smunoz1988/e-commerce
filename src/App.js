import './App.css';
import { useState, useEffect } from 'react';
import Category from './components/Category.jsx';
import { fetcher } from './fetcher.js';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetcher('/categories');
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);  // Add an empty dependency array to run the effect only once

  const handleCategoryClick = (id) => {
    const fetchProducts = async () => {
      try {
        const data = await fetcher(`/products?catId=${id}`);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
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
          {products.length > 0 ? renderProducts() : <p>No products to display</p>}
        </article>
      </section>
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
