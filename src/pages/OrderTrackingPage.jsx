import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockOrders } from '../data/mockOrders';
import { formatPrice, formatDate } from '../utils/formatUtils';
import EmptyState from '../components/EmptyState';

const OrderTrackingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get('orderId') || '');
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  const handleTrackOrder = (e) => {
    e.preventDefault();
    setError('');
    
    if (!orderId.trim()) {
      setError('Vui lòng nhập mã đơn hàng');
      return;
    }
    let foundOrder = mockOrders.find(o => o.id === orderId.toUpperCase());
    if (!foundOrder) {
      const savedOrders = JSON.parse(localStorage.getItem('kfc-orders') || '[]');
      foundOrder = savedOrders.find(o => o.id === orderId.toUpperCase());
    }

    if (foundOrder) {
      setOrder(foundOrder);
      setSearchParams({ orderId: orderId.toUpperCase() });
    } else {
      setError('Không tìm thấy đơn hàng với mã này');
      setOrder(null);
    }
  };

  const getStatusInfo = (status) => {
    const statusConfig = {
      pending: { text: 'Chờ xác nhận', color: 'bg-yellow-500' },
      confirmed: { text: 'Đã xác nhận', color: 'bg-blue-500' },
      shipping: { text: 'Đang giao hàng', color: 'bg-purple-500' },
      delivered: { text: 'Đã giao hàng', color: 'bg-green-500' },
      cancelled: { text: 'Đã hủy', color: 'bg-red-500' }
    };
    
    return statusConfig[status] || { text: status, color: 'bg-gray-500' };
  };

  const statusSteps = [
    { key: 'pending', label: 'Chờ xác nhận' },
    { key: 'confirmed', label: 'Đã xác nhận' },
    { key: 'shipping', label: 'Đang giao' },
    { key: 'delivered', label: 'Đã giao' }
  ];

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">THEO DÕI ĐƠN HÀNG</h1>

        {/* Search Form */}
        <form onSubmit={handleTrackOrder} className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Nhập mã đơn hàng (ví dụ: KFC001)"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-kfc-red focus:border-transparent text-lg"
            />
            <button
              type="submit"
              className="bg-kfc-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-200"
            >
              TRA CỨU
            </button>
          </div>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </form>

        {/* Order Details */}
        {order && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Order Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-bold">Đơn hàng #{order.id}</h2>
                <p className="text-gray-600">Ngày đặt: {formatDate(order.date)}</p>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-white ${getStatusInfo(order.status).color}`}>
                  {getStatusInfo(order.status).text}
                </div>
                <p className="text-2xl font-bold text-kfc-red mt-2">
                  {formatPrice(order.total)}
                </p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between relative">
                {statusSteps.map((step, index) => {
                  const stepIndex = statusSteps.findIndex(s => s.key === order.status);
                  const isCompleted = index <= stepIndex;
                  const isCurrent = index === stepIndex;
                  
                  return (
                    <div key={step.key} className="flex flex-col items-center relative z-10">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isCompleted ? 'bg-kfc-red text-white' : 'bg-gray-200 text-gray-500'
                        } ${isCurrent ? 'ring-4 ring-red-200' : ''}`}
                      >
                        {index + 1}
                      </div>
                      <span className={`text-sm mt-2 ${isCompleted ? 'text-kfc-red font-semibold' : 'text-gray-500'}`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
                <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
                  <div
                    className="h-1 bg-kfc-red transition-all duration-300"
                    style={{ width: `${(statusSteps.findIndex(s => s.key === order.status) / (statusSteps.length - 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Chi tiết đơn hàng</h3>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🍗</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-600">Số lượng: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Info */}
            {order.customer && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Thông tin khách hàng</h3>
                  <div className="space-y-2">
                    <p><strong>Họ tên:</strong> {order.customer.name}</p>
                    <p><strong>SĐT:</strong> {order.customer.phone}</p>
                    <p><strong>Địa chỉ:</strong> {order.customer.address}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Thông tin thanh toán</h3>
                  <div className="space-y-2">
                    <p><strong>Phương thức:</strong> {order.customer.paymentMethod === 'cash' ? 'Tiền mặt' : 'Chuyển khoản'}</p>
                    <p><strong>Trạng thái:</strong> {order.status === 'delivered' ? 'Đã thanh toán' : 'Chờ thanh toán'}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {!order && !error && (
          <EmptyState
            title="Nhập mã đơn hàng để tra cứu"
            description="Vui lòng nhập mã đơn hàng của bạn vào ô bên trên để xem trạng thái đơn hàng."
            showAction={false}
          />
        )}
      </div>
    </div>
  );
};

export default OrderTrackingPage;