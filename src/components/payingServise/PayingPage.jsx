import React, { useState } from 'react';

const PayingPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [fullName, setFullName] = useState('');

  const handlePayment = () => {
    // Здесь можно добавить логику обработки платежа
    console.log('Платеж обработан');
  };

  return (
    <div>
      <h2>Страница оплаты</h2>
      <div>
        <label>Номер карты:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Срок действия:</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      <div>
        <label>CVV:</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </div>
      <div>
        <label>Полное имя:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Оплатить</button>
    </div>
  );
};

export default PayingPage;
