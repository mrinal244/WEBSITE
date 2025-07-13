import React, { useState } from 'react';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';

interface PaymentGatewayProps {
  amount: number;
  onPaymentSuccess: (paymentId: string) => void;
  onPaymentFailure: (error: string) => void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  amount,
  onPaymentSuccess,
  onPaymentFailure
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [upiId, setUpiId] = useState('');

  const handlePayment = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      if (selectedMethod === 'cod') {
        onPaymentSuccess('COD_' + Date.now());
      } else {
        // Simulate 95% success rate
        const isSuccess = Math.random() > 0.05;
        
        if (isSuccess) {
          const paymentId = selectedMethod.toUpperCase() + '_' + Date.now();
          onPaymentSuccess(paymentId);
        } else {
          onPaymentFailure('Payment failed. Please try again.');
        }
      }
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Complete Payment</h3>
      
      <div className="mb-6">
        <div className="text-2xl font-bold text-amber-900 text-center">
          ₹{amount.toLocaleString()}
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-4 mb-6">
        <div
          onClick={() => setSelectedMethod('card')}
          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            selectedMethod === 'card' ? 'border-amber-900 bg-amber-50' : 'border-gray-300'
          }`}
        >
          <div className="flex items-center">
            <CreditCard className="h-5 w-5 mr-3 text-amber-900" />
            <span className="font-medium">Credit/Debit Card</span>
          </div>
        </div>

        <div
          onClick={() => setSelectedMethod('upi')}
          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            selectedMethod === 'upi' ? 'border-amber-900 bg-amber-50' : 'border-gray-300'
          }`}
        >
          <div className="flex items-center">
            <Smartphone className="h-5 w-5 mr-3 text-amber-900" />
            <span className="font-medium">UPI Payment</span>
          </div>
        </div>

        <div
          onClick={() => setSelectedMethod('cod')}
          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            selectedMethod === 'cod' ? 'border-amber-900 bg-amber-50' : 'border-gray-300'
          }`}
        >
          <div className="flex items-center">
            <Banknote className="h-5 w-5 mr-3 text-amber-900" />
            <span className="font-medium">Cash on Delivery</span>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      {selectedMethod === 'card' && (
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              value={cardDetails.expiry}
              onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <input
            type="text"
            placeholder="Cardholder Name"
            value={cardDetails.name}
            onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      )}

      {selectedMethod === 'upi' && (
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter UPI ID (e.g., user@paytm)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      )}

      {selectedMethod === 'cod' && (
        <div className="mb-6 p-4 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-800">
            You will pay ₹{amount.toLocaleString()} in cash when your order is delivered.
          </p>
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full bg-amber-900 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-800 transition-colors duration-300 disabled:opacity-50"
      >
        {isProcessing ? 'Processing Payment...' : `Pay ₹${amount.toLocaleString()}`}
      </button>

      <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
        <span>🔒 Secure Payment</span>
        <span>•</span>
        <span>SSL Encrypted</span>
      </div>
    </div>
  );
};

export default PaymentGateway;