// Mock Supabase client for demo purposes
export const supabase = {
  from: () => ({
    insert: () => ({
      select: () => ({
        single: () => Promise.resolve({ data: null, error: null })
      })
    }),
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null })
      })
    }),
    update: () => ({
      eq: () => Promise.resolve({ error: null })
    })
  })
};

// Mock database types
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