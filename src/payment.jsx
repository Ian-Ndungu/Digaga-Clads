
import React, { useState, useEffect } from 'react';

function Payment({ cartItems }) {
  const [order, setOrder] = useState({ items: [], total: 0 }); 
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setOrder({ items: cartItems, total });
    }
  }, [cartItems]);

  const handlePayment = () => {
    setIsProcessing(true);

  
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment successful!'); 
    }, 2000);
  }

  return (
    <div>
      <h2>Checkout</h2>
      <button id="paymentButton" onClick={handlePayment} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Make Payment'}
      </button>
      {order.items.length > 0 && (
        <div>
          <h3>Order Details</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>{item.name} - ${item.price} x {item.quantity}</li>
            ))}
          </ul>
          <p>Total: ${order.total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Payment;