import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import { formatPrice } from '../utils/formatUtils';
import { addToCart } from '../utils/cartUtils';
import ProductCard from '../components/ProductCard';
import EmptyState from '../components/EmptyState';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedCombo, setSelectedCombo] = useState(null);

  const product = mockProducts.find(p => p.id === parseInt(id));
  const relatedProducts = mockProducts
    .filter(p => p.category === product?.category && p.id !== product.id)
    .slice(0, 4);

  if (!product) {
    return (
      <EmptyState
        title="Sản phẩm không tồn tại"
        description="Không tìm thấy sản phẩm bạn yêu cầu."
        showAction={true}
        actionText="Quay lại thực đơn"
        actionLink="/menu"
      />
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedCombo);
    window.dispatchEvent(new Event('cartUpdated'));
    setQuantity(1);
    setSelectedCombo(null);
    
    alert('Đã thêm vào giỏ hàng!');
  };

  const price = selectedCombo ? selectedCombo.price : product.price;
  const totalPrice = price * quantity;

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-kfc-red">Trang chủ</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/menu" className="text-gray-500 hover:text-kfc-red">Thực đơn</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.longDescription}</p>

            {/* Combo Options */}
            {product.comboOptions.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Tùy chọn Combo</h3>
                <div className="space-y-3">
                  {product.comboOptions.map((combo) => (
                    <label key={combo.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="combo"
                        checked={selectedCombo?.id === combo.id}
                        onChange={() => setSelectedCombo(combo)}
                        className="text-kfc-red focus:ring-kfc-red"
                      />
                      <span className="flex-1">
                        <span className="font-medium">{combo.name}</span>
                        <span className="text-kfc-red font-bold ml-2">
                          {formatPrice(combo.price)}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-kfc-red">
                {formatPrice(price)}
              </span>
              {selectedCombo && (
                <span className="text-gray-500 line-through ml-2">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-6 mb-8">
              <span className="text-lg font-medium">Số lượng:</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Total & Add to Cart */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                Tổng cộng: {formatPrice(totalPrice)}
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-kfc-red text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-200"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">SẢN PHẨM LIÊN QUAN</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;