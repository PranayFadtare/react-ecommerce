import React from 'react';

const AddToCartButton = ({ product, onClick }) => {
  return (
    <button
      onClick={() => onClick(product)}
      style={styles.button}
    >
      Add to Cart
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default AddToCartButton;
