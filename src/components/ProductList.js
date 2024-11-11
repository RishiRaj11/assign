import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [category, setCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = ['all', ...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProducts = category === 'all'
    ? products
    : products.filter((product) => product.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
