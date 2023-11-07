import React, { useState } from 'react';
import './cart.css';
import Payment from './payment'; 

const ShoppingCart = () => {
function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 20.0,
      quantity: 2,
      image: '',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.0,
      quantity: 1,
      image: '',
    },
    { id: 1, name: 'Product 1', price: 10.00, quantity: 0, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 15.00, quantity: 0, image: 'product2.jpg' }
  ]);

  const [totalSum, setTotalSum] = useState(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const [showPaymentAlert, setShowPaymentAlert] = useState(false);

  const handlePayment = () => {

    setShowPaymentAlert(true); 

    setCart([]);
    setTotalSum(0);
  };
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

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(updatedCart);
    const newTotalSum = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalSum(newTotalSum);
  };
  function calculateTotal() {
    return cart.reduce((total, p) => total + (p.price * p.quantity), 0);
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
    <div className="shopping-cart">
      <h1 className="shopping-cart-title">Shopping Cart</h1>

      <table className="shopping-cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                {item.name}
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                />
          {cart.map(p => (
            <tr key={p.id}>
              <td className="shopping-cart-product">
                <img src={p.image} alt={p.name} className="shopping-cart-product-image" />
                {p.name}
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
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
      <p>Total: ${totalSum.toFixed(2)}</p>
      <button onClick={handlePayment}>Pay Now</button>

      {showPaymentAlert && (
        <div className="payment-alert">Payment successful!</div>
      )}
      <Payment cartItems={cart} />
    </div>
  );
};
}

export default ShoppingCart;