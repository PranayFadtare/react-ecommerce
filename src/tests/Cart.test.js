// Cart.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

describe('Cart Component', () => {
  const mockRemoveFromCart = jest.fn();
  const mockPlaceOrder = jest.fn();

  it('displays "Your cart is empty" message when cart is empty', () => {
    render(<Cart cart={[]} removeFromCart={mockRemoveFromCart} placeOrder={mockPlaceOrder} />);
    
    // Check for empty cart message
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('displays products when there are items in the cart', () => {
    const cartItems = [
      { id: 1, name: 'Iphone', price: 1500, image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184' },
      { id: 2, name: 'Macbook Air', price: 20, image: 'https://m.media-amazon.com/images/I/71jG+e7roXL.jpg' },
    ];

    render(<Cart cart={cartItems} removeFromCart={mockRemoveFromCart} placeOrder={mockPlaceOrder} />);

    // Check that each product in the cart is displayed
    expect(screen.getByText('Iphone')).toBeInTheDocument();
    expect(screen.getByText('$1500.00')).toBeInTheDocument();
    expect(screen.getByText('Macbook Air')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();

    // Verify that the "Your cart is empty" message is not displayed
    expect(screen.queryByText('Your cart is empty')).not.toBeInTheDocument();
  });
});
