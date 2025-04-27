import { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    // Handle payment process (This could integrate with real payment gateways like Stripe, PayPal, etc.)
    if (paymentMethod) {
      setPaymentStatus('Payment successful! Thanks For choosing us');
    } else {
      setPaymentStatus('Please select a payment method.');
    }
  };

  return (
    <section className="bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-navyBlue mb-6">Select Payment Method</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-700">Choose a Payment Method</h2>
          
          <div className="mt-4">
            <label className="flex items-center mb-4">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              <span className="text-lg">Credit / Debit Card</span>
            </label>

            <label className="flex items-center mb-4">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              <span className="text-lg">PayPal</span>
            </label>

            <label className="flex items-center mb-4">
              <input
                type="radio"
                name="paymentMethod"
                value="mobileMoney"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              <span className="text-lg">Mobile Money</span>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handlePayment}
            className="bg-deepGreen text-white px-6 py-3 rounded-full hover:bg-teal transition"
          >
            Pay Now
          </button>
        </div>

        {paymentStatus && (
          <div className="mt-6 text-center">
            <p className={`text-lg ${paymentStatus.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
              {paymentStatus}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Payment;
