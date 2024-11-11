// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Navbar.css'
const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;
