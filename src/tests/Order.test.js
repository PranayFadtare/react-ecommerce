// Order.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Order from '../components/Order';

describe('Order Component', () => {
  const mockCancelOrder = jest.fn();

  it('displays "You have no orders yet" message when there are no orders', () => {
    render(<Order orders={[]} cancelOrder={mockCancelOrder} />);
    
    // Check for empty order message
    expect(screen.getByText('You have no orders yet')).toBeInTheDocument();
  });

  it('displays order details when there are orders', () => {
    const orders = [
      {
        date: '2024-11-10',
        name: 'John Doe',
        phoneNumber: '1234567890',
        pincode: '123456',
        products: [
          { name: 'Laptop', price: 1000 },
          { name: 'Headphones', price: 50 },
        ],
      },
    ];

    render(<Order orders={orders} cancelOrder={mockCancelOrder} />);

    // Check that order details are displayed
    expect(screen.getByText('2024-11-10')).toBeInTheDocument();
    expect(screen.getByText('Name: John Doe | Phone: 1234567890 | Pincode: 123456')).toBeInTheDocument();
    expect(screen.getByText('Laptop - $1000.00')).toBeInTheDocument();
    expect(screen.getByText('Headphones - $50.00')).toBeInTheDocument();
  });

  it('calls cancelOrder function when "Cancel Order" button is clicked', () => {
    const orders = [
      {
        date: '2024-11-10',
        name: 'John Doe',
        phoneNumber: '1234567890',
        pincode: '123456',
        products: [
          { name: 'Laptop', price: 1000 },
        ],
      },
    ];

    render(<Order orders={orders} cancelOrder={mockCancelOrder} />);

    // Simulate click on "Cancel Order" button
    fireEvent.click(screen.getByText('Cancel Order'));

    // Verify that cancelOrder was called with the correct index
    expect(mockCancelOrder).toHaveBeenCalledWith(0);
  });
});
