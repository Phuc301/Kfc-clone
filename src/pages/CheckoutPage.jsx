import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartFromStorage, getCartTotal } from '../utils/cartUtils';
import { formatPrice } from '../utils/formatUtils';
import EmptyState from '../components/EmptyState';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [tax] = useState(0.1);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash'
  });

  useEffect(() => {
    const currentCart = getCartFromStorage();
    if (currentCart.length === 0) {
      navigate('/cart');
    }
    setCart(currentCart);
  }, [navigate]);

  const subtotal = getCartTotal(cart);
  const taxAmount = subtotal * tax;
  const total = subtotal + taxAmount;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = 'KFC' + Date.now().toString().slice(-6);
    const orders = JSON.parse(localStorage.getItem('kfc-orders') || '[]');
    const newOrder = {
      id: orderId,
      items: cart,
      total,
      status: 'confirmed',
      date: new Date().toISOString(),
      customer: formData
    };
    
    orders.push(newOrder);
    localStorage.setItem('kfc-orders', JSON.stringify(orders));

    localStorage.removeItem('kfc-cart');
    window.dispatchEvent(new Event('cartUpdated'));
    
    navigate(`/tracking?orderId=${orderId}`);
  };

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
        <h1 className="text-4xl font-bold mb-8">THANH TOÁN</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">THÔNG TIN KHÁCH HÀNG</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kfc-red focus:border-transparent"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kfc-red focus:border-transparent"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Địa chỉ giao hàng *
                </label>
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kfc-red focus:border-transparent"
                  placeholder="Nhập địa chỉ giao hàng chi tiết"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">PHƯƠNG THỨC THANH TOÁN</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                      className="text-kfc-red focus:ring-kfc-red"
                    />
                    <span>Tiền mặt khi nhận hàng</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="text-kfc-red focus:ring-kfc-red"
                    />
                    <span>Thẻ tín dụng/Ghi nợ</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="momo"
                      checked={formData.paymentMethod === 'momo'}
                      onChange={handleInputChange}
                      className="text-kfc-red focus:ring-kfc-red"
                    />
                    <span>Ví điện tử MoMo</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6">TÓM TẮT ĐƠN HÀNG</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4 mb-6">
                {cart.map((item) => {
                  const price = item.comboOption ? item.comboOption.price : item.product.price;
                  const total = price * item.quantity;
                  
                  return (
                    <div key={item.id} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h4 className="font-semibold">{item.product.name}</h4>
                        {item.comboOption && (
                          <p className="text-sm text-gray-600">{item.comboOption.name}</p>
                        )}
                        <p className="text-sm text-gray-600">Số lượng: {item.quantity}</p>
                      </div>
                      <span className="font-semibold">{formatPrice(total)}</span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Thuế (10%):</span>
                  <span>{formatPrice(taxAmount)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-3">
                  <span>Tổng cộng:</span>
                  <span className="text-kfc-red">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-kfc-red text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-200 mt-6"
              >
                ĐẶT HÀNG NGAY
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;