import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Experience premium sound quality with our flagship wireless headphones. Featuring advanced noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour Battery', 'Hi-Res Audio', 'Fast Charging'],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    brand: 'AudioTech'
  },
  {
    id: '2',
    name: 'Minimalist Watch Collection',
    price: 189,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/364917/pexels-photo-364917.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Elegant timepiece with clean lines and premium materials. Perfect for both casual and formal occasions.',
    features: ['Swiss Movement', 'Sapphire Crystal', 'Water Resistant', '2-Year Warranty'],
    inStock: true,
    rating: 4.7,
    reviews: 156,
    brand: 'TimeCreft'
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker',
    price: 129,
    originalPrice: 179,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Track your fitness goals with precision. Heart rate monitoring, GPS, and 7-day battery life.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery', 'Water Resistant'],
    inStock: true,
    rating: 4.6,
    reviews: 312,
    brand: 'FitTech'
  },
  {
    id: '4',
    name: 'Luxury Leather Bag',
    price: 249,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1006993/pexels-photo-1006993.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Handcrafted leather bag made from premium materials. Spacious interior with multiple compartments.',
    features: ['Premium Leather', 'Multiple Compartments', 'Handcrafted', 'Lifetime Warranty'],
    inStock: true,
    rating: 4.9,
    reviews: 89,
    brand: 'CraftLeather'
  },
  {
    id: '5',
    name: 'Wireless Charging Station',
    price: 79,
    image: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Charge multiple devices simultaneously with our sleek wireless charging station.',
    features: ['3-Device Charging', 'Fast Wireless Charging', 'LED Indicators', 'Universal Compatibility'],
    inStock: true,
    rating: 4.5,
    reviews: 178,
    brand: 'PowerTech'
  },
  {
    id: '6',
    name: 'Designer Sunglasses',
    price: 159,
    originalPrice: 219,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Premium sunglasses with UV protection and stylish design. Perfect for any occasion.',
    features: ['UV Protection', 'Polarized Lenses', 'Lightweight Frame', 'Scratch Resistant'],
    inStock: false,
    rating: 4.7,
    reviews: 203,
    brand: 'StyleVision'
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Sports',
  'Beauty'
];