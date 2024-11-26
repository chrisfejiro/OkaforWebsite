import React from "react";
import { Product } from "../Interface/Interface";
import { useCart } from "../Data/CartContext"; // Import the useCart hook
import "../Styles/productCardStyles"

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Access the addToCart function from the Cart Context

  // Determine the weight suffix based on the product name
  const weightSuffix = product.category.toLowerCase().includes("rice")
    ? "kg"
    : product.name.toLowerCase().includes("oil")
    ? "L"
    : ""; // Default case, no suffix

  return (
    <div className="card w-56 h-60 bg-base-100 shadow-md p-0 "> {/* Full width card */}
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-28 object-contain mt-1" // Adjust the height to fit your needs
        />
      </figure>
      <div className=" pt-0 w-full mx-0 -mb-14">
            <h2 className=" text-sm font-semibold text-center">{product.name} 
            </h2>
            <p
              className="text-gray-600 text-sm text-center">
                {product.weight} {weightSuffix}
              </p>
        <p className="text-sm font-bold text-center -mb-2">#{product.price.toFixed(2)}</p>
        {/* {product.description && <p className="text-sm">{product.description}</p>} Optional description */}
        {/* Add to Cart Button */}
      </div>

      <button
          className="btn btn-primary mt-20 w-56 "
          onClick={() => addToCart(product)} // Add the product to the cart on click
        >
          Add to Cart
        </button>
    </div>
  );
};

export default ProductCard;
