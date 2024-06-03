import React from 'react';

const Category = ({ product, onCategoryClick }) => {
  return (
    <div onClick={() => onCategoryClick(product.id)}>{product.title}</div>
  );
};

export default Category;
