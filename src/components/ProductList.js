// ProductList.js
import React from 'react';
import AddToCartButton from './AddToCartButton';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Iphone', price: 1500, image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184' },
    { id: 2, name: 'Macbook Air', price: 20, image: 'https://m.media-amazon.com/images/I/71jG+e7roXL.jpg' },
    { id: 3, name: 'Airpods Pro', price: 30, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694672652/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/301165_xzuxl0.png?tr=w-600' },
  ];

  return (
    <div style={styles.container}>
      <h2>Products</h2>
      <div style={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <AddToCartButton product={product} onClick={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '2rem' },
  productGrid: { display: 'flex', gap: '1.5rem', flexWrap: 'wrap' },
  card: { padding: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', textAlign: 'center' },
  image: {
    width: '150px',
    height: '150px', // Ensure it covers the full height of its container
    objectFit: 'cover', // Scales the image to cover the container without distortion
    borderRadius: '8px',
  },
};

export default ProductList;
