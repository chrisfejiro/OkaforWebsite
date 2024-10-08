// Data/Data.ts

import { Product } from '../Interface/Interface';

export const products: Product[] = [
  {
    id: 1,
    name: 'Basmati Rice',
    price: 75000,
    weight: 5,
    image: '/Images/basmaticrice.png',
    description: 'Premium quality basmati rice, ideal for all types of dishes.',
    category: "rice", // Add category field
  
  },
  {
    id: 2,
    name: 'Jasmine Rice',
    price: 40000,
    weight: 5,
    image: '/Images/Jasminerice.jpg',
    description: 'Fragrant jasmine rice, perfect for Asian-inspired dishes.',
    category: "rice",
  },
  {
    id: 3,
    name: 'Canola Oil',
    price: 30000,
    weight: 5,
    image:'/Images/canolaoil.jpg',
    description: 'Healthy cooking oil with a light flavor and high smoking point.',
    category: "oil",
  },
  {
    id: 4,
    name: 'Olive Oil',
    price: 50000,
    weight: 1,
    image: '/Images/oliveoil.png',
    description: 'Extra virgin olive oil, great for salads and Mediterranean cuisine.',
    category: "oil",
  },
  {
    id: 5,
    name: 'Parboiled Rice',
    price: 100000,
    weight: 5,
    image: '/Images/parboiledrice.png',
    description: 'Nutrient-rich parboiled rice, retains more vitamins than regular rice.',
    category: "rice",
  }
];
