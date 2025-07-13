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
      'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839888/pexels-photo-8839888.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839889/pexels-photo-8839889.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
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
      'https://images.pexels.com/photos/8839890/pexels-photo-8839890.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839891/pexels-photo-8839891.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839892/pexels-photo-8839892.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
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
      'https://images.pexels.com/photos/8839893/pexels-photo-8839893.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839894/pexels-photo-8839894.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839895/pexels-photo-8839895.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
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
      'https://images.pexels.com/photos/8839896/pexels-photo-8839896.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839897/pexels-photo-8839897.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839898/pexels-photo-8839898.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
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
      'https://images.pexels.com/photos/8839899/pexels-photo-8839899.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839901/pexels-photo-8839901.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
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
      'https://images.pexels.com/photos/8839902/pexels-photo-8839902.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839903/pexels-photo-8839903.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
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