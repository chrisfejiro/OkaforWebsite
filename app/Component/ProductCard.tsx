import React from "react";
import { Product } from "../Interface/Interface";
import { useCart } from "../Data/CartContext"; // Import the useCart hook

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Access the addToCart function from the Cart Context

  // Determine the weight suffix based on the product name
  const weightSuffix = product.name.toLowerCase().includes("rice")
    ? "kg"
    : product.name.toLowerCase().includes("oil")
    ? "L"
    : ""; // Default case, no suffix

  return (
    <div className="card w-full bg-base-100 shadow-md p-4"> {/* Full width card */}
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 object-contain" // Adjust the height to fit your needs
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title text-lg font-semibold">{product.name}</h2> {/* Adjusted font size */}
        <p className="text-gray-600">
          {product.weight} {weightSuffix}
        </p>
        <p className="text-xl font-bold">#{product.price.toFixed(2)}</p>
        {product.description && <p className="text-sm">{product.description}</p>} {/* Optional description */}
        
        {/* Add to Cart Button */}
        <button
          className="btn btn-primary mt-4 w-full md:w-48"
          onClick={() => addToCart(product)} // Add the product to the cart on click
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
