import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCartFromStorage, getCartTotal } from '../utils/cartUtils';
import { formatPrice } from '../utils/formatUtils';
import CartItem from '../components/CartItem';
import EmptyState from '../components/EmptyState';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [tax] = useState(0.1); // 10% tax

  useEffect(() => {
    updateCart();
  }, []);

  const updateCart = () => {
    const currentCart = getCartFromStorage();
    setCart(currentCart);
  };

  const subtotal = getCartTotal(cart);
  const taxAmount = subtotal * tax;
  const total = subtotal + taxAmount;

  if (cart.length === 0) {
    return (
      <EmptyState
        title="Giỏ hàng trống"
        description="Hãy thêm một vài món ngon vào giỏ hàng của bạn!"
        showAction={true}
        actionText="Mua sắm ngay"
        actionLink="/menu"
      />
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">GIỎ HÀNG CỦA BẠN</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onUpdate={updateCart} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-8">
            <h2 className="text-2xl font-bold mb-6">TÓM TẮT ĐƠN HÀNG</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Thuế (10%):</span>
                <span>{formatPrice(taxAmount)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-xl font-bold">
                <span>Tổng cộng:</span>
                <span className="text-kfc-red">{formatPrice(total)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-kfc-red text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-200 text-center block"
            >
              TIẾN HÀNH THANH TOÁN
            </Link>

            <Link
              to="/menu"
              className="w-full border border-gray-300 text-gray-700 py-4 px-8 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors duration-200 text-center block mt-4"
            >
              TIẾP TỤC MUA HÀNG
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;