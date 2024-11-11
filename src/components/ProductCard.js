// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div
    className="product-card"
    style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      maxWidth: '250px',
      margin: 'auto',
    }}
  >
    <div
      style={{
        width: '100%',
        height: '200px', // Fixed height for consistent sizing
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain', // Ensure the image scales without cropping
          borderRadius: '8px',
        }}
      />
    </div>
    <div
      style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      <h3
        style={{
          fontSize: '1.1rem',
          color: '#333',
          marginBottom: '0.5rem',
          fontWeight: 600,
          lineHeight: 1.3,
          minHeight: '3rem', // Fixed height for title alignment
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {product.title}
      </h3>
      <p
        style={{
          color: '#666',
          fontSize: '1rem',
          marginBottom: '1rem',
        }}
      >
        ${product.price}
      </p>
    </div>
    <Link
      to={`/product/${product.id}`}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        display: 'inline-block',
      }}
    >
      View Details
    </Link>
  </div>
);

export default ProductCard;
