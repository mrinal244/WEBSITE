// Mock order service without Supabase dependency
import { CartItem } from '../types/product';

export interface OrderData {
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: string;
  items: CartItem[];
  totalAmount: number;
}

export const createOrder = async (orderData: OrderData) => {
  try {
    // Simulate order creation without database
    const orderId = 'ORDER_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log order for demo purposes
    console.log('Order created:', { orderId, ...orderData });
    
    return { success: true, orderId };
  } catch (error) {
    console.error('Error creating order:', error);
    return { success: false, error: 'Failed to create order' };
  }
};

export const getOrderById = async (orderId: string) => {
  try {
    // Mock order data
    const order = {
      id: orderId,
      customer_email: 'customer@example.com',
      customer_name: 'Demo Customer',
      total_amount: 25000,
      order_status: 'confirmed',
      created_at: new Date().toISOString()
    };

    return { success: true, order };
  } catch (error) {
    console.error('Error fetching order:', error);
    return { success: false, error: 'Failed to fetch order' };
  }
};

export const updatePaymentStatus = async (orderId: string, status: 'completed' | 'failed') => {
  try {
    console.log('Payment status updated:', { orderId, status });
    return { success: true };
  } catch (error) {
    console.error('Error updating payment status:', error);
    return { success: false, error: 'Failed to update payment status' };
  }
};