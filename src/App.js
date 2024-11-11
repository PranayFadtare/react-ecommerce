import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Order from './components/Order';

function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Retrieve saved cart and orders from localStorage on page load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }

    const savedOrders = JSON.parse(localStorage.getItem('orders'));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const placeOrder = (orderDetails) => {
    const newOrder = {
      ...orderDetails,
      products: cart,
      date: new Date().toLocaleString(),
    };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setCart([]); // Empty the cart after order is placed
    localStorage.removeItem('cart'); // Remove cart from localStorage
  };

  const cancelOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <Router>
      <nav style={styles.navbar}>
        <div style={styles.logo}>Lifestyle</div>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/cart" style={styles.link}>Cart ({cart.length})</Link>
          <Link to="/orders" style={styles.link}>Orders</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} placeOrder={placeOrder} />} />
        <Route path="/orders" element={<Order orders={orders} cancelOrder={cancelOrder} />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' },
  logo: { fontSize: '1.5rem', fontWeight: 'bold' },
  links: { display: 'flex', gap: '1.5rem' },
  link: { color: '#fff', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.3s' },
};

export default App;
