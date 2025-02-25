"use client"
import React, { useState } from 'react';

export default function PaymentPage() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment logic here
    console.log('Payment info:', cardInfo);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={cardInfo.cardNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Card Number"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Expiry (MM/YY)</label>
          <input
            type="text"
            name="expiry"
            value={cardInfo.expiry}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">CVV</label>
          <input
            type="text"
            name="cvv"
            value={cardInfo.cvv}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="CVV"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
