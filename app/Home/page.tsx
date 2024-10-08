"use client";
import React, { useEffect, useState } from 'react';
import { Product } from '../Interface/Interface';
import { products as productData } from '../Data/Data';
import ProductCard from '../Component/ProductCard';
import SearchBar from '../Component/Search'; // Import SearchBar component

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for the search term
  const [sortCriteria, setSortCriteria] = useState<string>(''); // State for sorting criteria
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // State for sorting order
  const [category, setCategory] = useState<string>(''); // State for selected category

  // Fetch products on client side
  useEffect(() => {
    // Simulate a fetch call
    setProducts(productData);
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || product.category === category) // Filter by selected category
  );

  // Sorting the filtered products
  const sortedProducts = filteredProducts.sort((a, b) => {
    let comparison = 0;
  
    if (sortCriteria === 'price') {
      comparison = a.price - b.price; // This works since a.price and b.price are numbers
    } else if (sortCriteria === 'weight') {
      comparison = a.weight - b.weight; // This works since a.weight and b.weight are numbers
    }
  
    return sortOrder === 'asc' ? comparison : -comparison;
  });
  
  // Get unique categories from the products
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="container mx-auto p-4 bg-gray-500">
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} /> {/* Add SearchBar here */}

      {/* Filtering and Sorting Options */}
      <div className="mb-4">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered mr-2"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          onChange={(e) => setSortCriteria(e.target.value)}
          className="select select-bordered mr-2"
        >
          <option value="">Sort by</option>
          <option value="price">Price</option>
          <option value="weight">Weight</option>
        </select>
        <select
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          className="select select-bordered"
        >
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p> // Fallback if no products match the search
        )}
      </div>
    </div>
  );
};

export default Home;
