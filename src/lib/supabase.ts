import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xyzcompany.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Order {
  id: string;
  customer_email: string;
  customer_name: string;
  customer_phone: string;
  shipping_address: any;
  items: any[];
  total_amount: number;
  payment_method: string;
  payment_status: 'pending' | 'completed' | 'failed';
  order_status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  product_price: number;
  quantity: number;
  selected_size: string;
  selected_color: string;
  created_at: string;
}