import { supabase } from '../lib/supabase';
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
    // Create the order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_email: orderData.customerEmail,
        customer_name: orderData.customerName,
        customer_phone: orderData.customerPhone,
        shipping_address: orderData.shippingAddress,
        total_amount: orderData.totalAmount,
        payment_method: orderData.paymentMethod,
        payment_status: 'pending',
        order_status: 'pending'
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // Create order items
    const orderItems = orderData.items.map(item => ({
      order_id: order.id,
      product_id: item.product.id,
      product_name: item.product.name,
      product_price: item.product.price,
      quantity: item.quantity,
      selected_size: item.selectedSize,
      selected_color: item.selectedColor
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) throw itemsError;

    return { success: true, orderId: order.id };
  } catch (error) {
    console.error('Error creating order:', error);
    return { success: false, error: error.message };
  }
};

export const getOrderById = async (orderId: string) => {
  try {
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (*)
      `)
      .eq('id', orderId)
      .single();

    if (orderError) throw orderError;

    return { success: true, order };
  } catch (error) {
    console.error('Error fetching order:', error);
    return { success: false, error: error.message };
  }
};

export const updatePaymentStatus = async (orderId: string, status: 'completed' | 'failed') => {
  try {
    const { error } = await supabase
      .from('orders')
      .update({ 
        payment_status: status,
        order_status: status === 'completed' ? 'confirmed' : 'pending'
      })
      .eq('id', orderId);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error('Error updating payment status:', error);
    return { success: false, error: error.message };
  }
};