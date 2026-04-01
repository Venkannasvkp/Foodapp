import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export function Cart() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Add some delicious snacks to get started!</p>
        <Link
          to="/"
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="space-y-4 mb-8">
        {cart.map((item) => {
          const itemTotal = item.product.prices[item.weight] * item.quantity;

          return (
            <div
              key={`${item.product.id}-${item.weight}`}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-800">
                  {item.product.name}
                </h3>
                <p className="text-gray-600">Weight: {item.weight}</p>
                <p className="text-orange-600 font-semibold">
                  ₹{item.product.prices[item.weight]} per pack
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.weight, item.quantity - 1)
                  }
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-lg w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.weight, item.quantity + 1)
                  }
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center sm:text-right">
                <p className="text-2xl font-bold text-gray-800">₹{itemTotal}</p>
                <button
                  onClick={() => removeFromCart(item.product.id, item.weight)}
                  className="text-red-500 hover:text-red-700 transition-colors mt-2 flex items-center justify-center sm:justify-end space-x-1"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="text-sm">Remove</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold text-gray-700">Total Amount</span>
          <span className="text-3xl font-bold text-orange-600">
            ₹{getTotalPrice()}
          </span>
        </div>

        <Link
          to="/checkout"
          className="block w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-semibold text-center hover:from-orange-600 hover:to-red-700 transition-all duration-300"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
