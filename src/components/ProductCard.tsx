import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product, WeightOption } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const weightOptions: WeightOption[] = ['500g', '1kg', '2kg', '5kg', '10kg'];

export function ProductCard({ product }: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>('1kg');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const price = product.prices[selectedWeight];
  const totalPrice = price * quantity;

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
          {product.name}
        </h3>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-gray-600 text-sm">{product.description}</p>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Weight
          </label>
          <select
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value as WeightOption)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
          >
            {weightOptions.map((weight) => (
              <option key={weight} value={weight}>
                {weight} - ₹{product.prices[weight]}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">Quantity</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-lg w-8 text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Total Price</span>
            <span className="text-2xl font-bold text-orange-600">
              ₹{totalPrice} 
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
