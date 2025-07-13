import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { createOrder } from '../services/orderService';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    paymentMethod: 'card'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Create order in database
      const orderData = {
        customerEmail: formData.email,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerPhone: formData.phone,
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode
        },
        paymentMethod: formData.paymentMethod,
        items: state.items,
        totalAmount: finalTotal
      };

      const result = await createOrder(orderData);

      if (result.success) {
        // Simulate payment processing
        setTimeout(() => {
          alert(`Order placed successfully! Order ID: ${result.orderId}\nYou will receive a confirmation email shortly.`);
          dispatch({ type: 'CLEAR_CART' });
          navigate('/');
          setIsProcessing(false);
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to create order');
      }
    } catch (error) {
      console.error('Order creation failed:', error);
      alert('Failed to place order. Please try again.');
      setIsProcessing(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">Your cart is empty</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-amber-900 hover:text-amber-700 font-medium"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const shippingCost = state.total >= 2000 ? 0 : 200;
  const finalTotal = state.total + shippingCost;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-amber-900 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Shopping
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Checkout</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 mt-4"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="PIN code"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 mt-4"
                  required
                />
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                    Credit/Debit Card
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    UPI Payment
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-amber-900 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-800 transition-colors duration-300 disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : `Place Order - ₹${finalTotal.toLocaleString()}`}
              </button>
            </form>

            {/* Security Features */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Secure Payment
                </div>
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-1" />
                  Fast Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
            
            <div className="space-y-4">
              {state.items.map((item) => {
                const itemId = `${item.product.id}-${item.selectedSize}-${item.selectedColor}`;
                return (
                  <div key={itemId} className="flex space-x-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{item.product.name}</h4>
                      <p className="text-sm text-gray-500">
                        Size: {item.selectedSize} | Color: {item.selectedColor}
                      </p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{state.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
              </div>
              <div className="flex justify-between text-lg font-medium text-gray-900 border-t border-gray-200 pt-2">
                <span>Total</span>
                <span>₹{finalTotal.toLocaleString()}</span>
              </div>
            </div>

            {state.total < 2000 && (
              <div className="mt-4 p-3 bg-amber-50 rounded-md">
                <p className="text-sm text-amber-800">
                  Add ₹{(2000 - state.total).toLocaleString()} more for free shipping!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;