import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart, placeOrder }) => {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phoneNumber: '',
    pincode: '',
  });

  const handleOrder = () => {
    if (!userDetails.name || !userDetails.phoneNumber || !userDetails.pincode) {
      alert('Please fill all the fields');
      return;
    }
    placeOrder(userDetails);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.title}>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p style={styles.emptyMessage}>Your cart is empty</p>
      ) : (
        <div style={styles.cartItems}>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <div style={styles.itemDetails}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(index)} style={styles.removeButton}>Remove</button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div style={styles.orderButtonContainer}>
          <button onClick={() => setShowModal(true)} style={styles.orderButton}>Place Order</button>
        </div>
      )}

      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Enter Your Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userDetails.name}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={userDetails.phoneNumber}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={userDetails.pincode}
              onChange={handleInputChange}
              style={styles.input}
            />
            <div style={styles.modalButtons}>
              <button onClick={handleOrder} style={styles.confirmButton}>Confirm</button>
              <button onClick={() => setShowModal(false)} style={styles.cancelButton}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    fontSize: '1.2rem',
  },
  cartItems: {
    display: 'grid',
    gap: '1rem',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  itemImage: {
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    marginRight: '1rem',
  },
  itemDetails: {
    flexGrow: 1,
  },
  itemName: {
    margin: '0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    margin: '0.5rem 0 0',
    fontSize: '1rem',
    color: '#888',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  orderButtonContainer: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  orderButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    width: '400px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    color: 'white',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Cart;
