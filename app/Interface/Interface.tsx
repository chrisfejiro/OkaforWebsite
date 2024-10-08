// Interface/Interface.ts
export interface Product {
  id: number;
  name: string;
  price: number; // Ensure price is a number
  weight: number; // Ensure weight is a number (e.g., in kg)
  image: string;
  description?: string; // Optional description
  category: string; // Add category field
}
