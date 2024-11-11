import React from 'react';

const Order = ({ orders, cancelOrder }) => {
  return (
    <div style={styles.orderContainer}>
      <h2 style={styles.title}>Order History</h2>
      {orders.length === 0 ? (
        <p style={styles.emptyMessage}>You have no orders yet</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} style={styles.orderCard}>
              <h3 style={styles.orderDate}>{order.date}</h3>
              <p style={styles.orderDetails}>
                Name: {order.name} | Phone: {order.phoneNumber} | Pincode: {order.pincode}
              </p>
              <ul style={styles.productList}>
                {order.products.map((product, i) => (
                  <li key={i} style={styles.productItem}>
                    {product.name} - ${product.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => cancelOrder(index)}
                style={styles.cancelButton}
              >
                Cancel Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  orderContainer: {
    padding: '2rem',
    maxWidth: '800px',
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
  orderCard: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  },
  orderDate: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  orderDetails: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '1rem',
  },
  productList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  productItem: {
    fontSize: '1rem',
    color: '#555',
  },
  cancelButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '1rem',
  },
};

export default Order;
