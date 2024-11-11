// ProductList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../components/ProductList';

describe('ProductList Component', () => {
  const mockAddToCart = jest.fn();

  beforeEach(() => {
    render(<ProductList addToCart={mockAddToCart} />);
  });

  it('renders the title "Products"', () => {
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });

  it('displays all products with name, price, and image', () => {
    const productNames = ['Iphone', 'Macbook Air', 'Airpods Pro'];
    const productPrices = ['$1500', '$20', '$30'];

    productNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });

    productPrices.forEach(price => {
      expect(screen.getByText(price)).toBeInTheDocument();
    });

    const productImages = screen.getAllByRole('img');
    expect(productImages.length).toBe(3); // Ensure there are 3 product images

    productImages.forEach(img => {
      expect(img).toHaveAttribute('src');
      expect(img).toHaveAttribute('alt');
    });
  });

  it('calls addToCart function when "Add to Cart" button is clicked', () => {
    const addToCartButtons = screen.getAllByText(/Add to Cart/i);
    fireEvent.click(addToCartButtons[0]); // Click on the first "Add to Cart" button

    expect(mockAddToCart).toHaveBeenCalledWith({
      id: 1,
      name: 'Iphone',
      price: 1500,
      image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184',
    });
  });
});
