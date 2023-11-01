import React, { useState } from 'react';
import './cart.css';


const ShoppingCart = () => {
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

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(updatedCart);
    const newTotalSum = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalSum(newTotalSum);
  };

  return (
    <div id="shoppo">
     
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
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
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${totalSum.toFixed(2)}</p>
      <button onClick={handlePayment}>Pay Now</button>

      {showPaymentAlert && (
        <div className="payment-alert">Payment successful!</div>
      )}
    </div>
  );
};

export default ShoppingCart;
