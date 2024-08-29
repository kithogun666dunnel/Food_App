import React, { useState } from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-16 object-cover rounded"
        />
        <div>
          <h4 className="text-lg font-semibold">{item.name}</h4>
          <p className="text-gray-500">Quantity: {item.quantity}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold">${item.price}</span>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Sample cart items
    { id: 1, name: "Pizza", price: 12.99, quantity: 1, image: "pizza.jpg" },
    { id: 2, name: "Burger", price: 8.99, quantity: 2, image: "burger.jpg" },
    { id: 3, name: "Pasta", price: 10.99, quantity: 1, image: "pasta.jpg" },
  ]);

  const handleRemove = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-semibold">Total Price:</span>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="mt-6 text-right">
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-md focus:outline-none">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
