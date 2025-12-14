import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/formatUtils';
import { updateCartItemQuantity, removeFromCart } from '../utils/cartUtils';

const CartItem = ({ item, onUpdate }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      handleRemove();
    } else {
      updateCartItemQuantity(item.id, newQuantity);
      onUpdate();
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
    onUpdate();
  };

  const price = item.comboOption ? item.comboOption.price : item.product.price;
  const total = price * item.quantity;

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.product.name}</h3>
        {item.comboOption && (
          <p className="text-gray-600 text-sm">{item.comboOption.name}</p>
        )}
        <p className="text-kfc-red font-bold">{formatPrice(price)}</p>
      </div>
      
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="font-semibold w-8 text-center">{item.quantity}</span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="text-right min-w-24">
        <p className="font-bold text-lg">{formatPrice(total)}</p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 transition-colors mt-2"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;