import React, { useState, useEffect } from 'react';
import './payment.css';

function Payment({ cartItems }) {
  const [order, setOrder] = useState({ items: [], total: 0 });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setOrder({ items: cartItems, total });
    }
  }, [cartItems]);

  const handlePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment successful!');
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>Checkout</h2>
      <button
        className="payment-button"
        id="paymentButton"
        onClick={handlePayment}
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Make Payment'}
      </button>
      {order.items.length > 0 && (
        <div className="order-details">
          <h3>Total Order</h3>
          <p>Total: ${order.total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
