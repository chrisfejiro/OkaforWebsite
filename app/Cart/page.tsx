// Cart.tsx
'use client';
import React from "react";
import { useCart } from "../Data/CartContext"; // Import Cart Context
import Link from "next/link"; // Adjust if using Next.js for navigation

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <div className="mt-4">
            <Link href="/Home">
              <button className="btn btn-primary">Continue Shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Header */}
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Weight</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <div className="flex items-center">
                      <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-cover mr-4" />
                      <div>
                        <div className="font-bold">{item.product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>#{item.product.price.toFixed(2)}</td>
                  <td>{item.product.weight}</td>
                  <td className="flex items-center">
                    <button className="btn btn-secondary btn-xs" onClick={() => decreaseQuantity(item.product.id)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-secondary btn-xs" onClick={() => increaseQuantity(item.product.id)}>+</button>
                  </td>
                  <td>
                    <button className="btn btn-error btn-xs" onClick={() => removeFromCart(item.product.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <h2 className="text-lg font-bold">Total: #{totalPrice.toFixed(2)}</h2>
          </div>
          <div className="mt-4">
            <Link href="/Home">
              <button className="btn btn-primary">Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
