import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ethereal Drape Dress',
    price: 12500,
    originalPrice: 15000,
    description: 'A flowing masterpiece that embodies grace and sophistication. This ethereal drape dress features delicate pleating and a flattering silhouette that moves beautifully with every step.',
    category: 'Dresses',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Blush Pink', 'Sage Green'],
    inStock: true,
    featured: true,
    details: {
      fabric: 'Pure Silk Georgette',
      care: 'Dry clean only',
      fit: 'Relaxed fit with adjustable waist tie',
      occasion: 'Evening wear, Special occasions'
    }
  },
  {
    id: '2',
    name: 'Royal Embroidered Lehenga',
    price: 45000,
    originalPrice: 55000,
    description: 'An exquisite bridal lehenga featuring intricate hand embroidery with gold threads, sequins, and pearls. This masterpiece represents the pinnacle of Indian craftsmanship.',
    category: 'Bridal',
    images: [
      'https://images.pexels.com/photos/3754260/pexels-photo-3754260.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/3754253/pexels-photo-3754253.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/9570531/pexels-photo-9570531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Deep Red', 'Royal Blue', 'Emerald Green', 'Gold'],
    inStock: true,
    featured: true,
    details: {
      fabric: 'Pure Silk with Zardozi work',
      care: 'Professional dry clean recommended',
      fit: 'Traditional fit with adjustable waist',
      occasion: 'Bridal, Wedding ceremonies'
    }
  },
  {
    id: '3',
    name: 'Contemporary Saree',
    price: 18500,
    originalPrice: 22000,
    description: 'A modern interpretation of the classic saree, featuring contemporary prints and a pre-stitched design for effortless draping.',
    category: 'Traditional',
    images: [
      'https://images.pexels.com/photos/9570531/pexels-photo-9570531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/3754210/pexels-photo-3754210.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy Blue', 'Burgundy', 'Forest Green', 'Black'],
    inStock: true,
    featured: false,
    details: {
      fabric: 'Silk blend with digital print',
      care: 'Hand wash or gentle machine wash',
      fit: 'Pre-stitched for easy wearing',
      occasion: 'Formal events, Office parties'
    }
  },
  {
    id: '4',
    name: 'Minimalist Kurta Set',
    price: 8900,
    originalPrice: 11000,
    description: 'Clean lines and contemporary cuts define this minimalist kurta set. Perfect for the modern woman who appreciates understated elegance.',
    category: 'Ready to Wear',
    images: [
      'https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Light Blue', 'Mint Green'],
    inStock: true,
    featured: false,
    details: {
      fabric: 'Cotton silk blend',
      care: 'Machine wash cold',
      fit: 'Relaxed fit with straight pants',
      occasion: 'Casual wear, Work from home'
    }
  },
  {
    id: '5',
    name: 'Designer Palazzo Set',
    price: 15200,
    originalPrice: 18000,
    description: 'Flowing palazzo pants paired with an intricately designed kurta. This set combines comfort with high fashion for the perfect day-to-evening look.',
    category: 'Contemporary',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Coral', 'Lavender', 'Mustard', 'Teal'],
    inStock: true,
    featured: false,
    details: {
      fabric: 'Crepe with block print',
      care: 'Dry clean preferred',
      fit: 'Flowy palazzo with fitted kurta',
      occasion: 'Brunch, Casual outings'
    }
  },
  {
    id: '6',
    name: 'Silk Anarkali Ensemble',
    price: 22800,
    originalPrice: 28000,
    description: 'A regal Anarkali suit that captures the essence of royal Indian fashion. Features intricate embroidery and a flowing silhouette.',
    category: 'Festive',
    images: [
      'https://images.pexels.com/photos/3754253/pexels-photo-3754253.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/3754260/pexels-photo-3754260.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/9570531/pexels-photo-9570531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Magenta', 'Royal Purple', 'Golden Yellow', 'Peacock Blue'],
    inStock: true,
    featured: true,
    details: {
      fabric: 'Pure silk with thread work',
      care: 'Dry clean only',
      fit: 'Flared Anarkali with churidar',
      occasion: 'Festivals, Wedding functions'
    }
  }
];