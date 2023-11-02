import React, { useState } from 'react';
import './cart.css';

function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 10.00, quantity: 0, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 15.00, quantity: 0, image: 'product2.jpg' }
  ]);

  function handleQuantityChange(event, productId) {
    const newCart = cart.map(p => {
      if (p.id === productId) {
        return { ...p, quantity: parseInt(event.target.value) };
      } else {
        return p;
      }
    });
    setCart(newCart);
  }

  function calculateTotal() {
    return cart.reduce((total, p) => total + (p.price * p.quantity), 0);
  }

  function proceedToPayPal() {
    // TODO: Implement PayPal integration
    alert('Proceeding to PayPal with total amount of $' + calculateTotal().toFixed(2));
  }

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart-title">Shopping Cart</h1>

      <table className="shopping-cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(p => (
            <tr key={p.id}>
              <td className="shopping-cart-product">
                <img src={p.image} alt={p.name} className="shopping-cart-product-image" />
                {p.name}
              </td>
              <td className="shopping-cart-price">${p.price.toFixed(2)}</td>
              <td className="shopping-cart-quantity"><input type="number" min="0" value={p.quantity} onChange={e => handleQuantityChange(e, p.id)} /></td>
              <td className="shopping-cart-total">${(p.price * p.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="shopping-cart-total-label">Total:</td>
            <td className="shopping-cart-total-amount">${calculateTotal().toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      <button className="shopping-cart-button" onClick={proceedToPayPal}>Proceed to PayPal</button>
    </div>
  );
}

export default ShoppingCart;