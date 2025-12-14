import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { formatPrice } from '../utils/formatUtils';
import { addToCart } from '../utils/cartUtils';

const ProductCard = ({ product }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    
    // Dispatch event to update cart count
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-kfc-red transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-kfc-red font-bold text-lg">
            {formatPrice(product.price)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="bg-kfc-red text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-200"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;