import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">LIÊN HỆ KFC VIETNAM</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">THÔNG TIN LIÊN HỆ</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-kfc-red mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Hotline</h3>
                  <p className="text-gray-600 text-lg">1900 1234</p>
                  <p className="text-gray-500">(7:00 - 22:00 hàng ngày)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-kfc-red mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">contact@kfcvietnam.com</p>
                  <p className="text-gray-600">support@kfcvietnam.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-kfc-red mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Trụ sở chính</h3>
                  <p className="text-gray-600">
                    123 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP.HCM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-kfc-red mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Giờ mở cửa</h3>
                  <p className="text-gray-600">Thứ 2 - Chủ nhật: 7:00 - 22:00</p>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">VỀ KFC VIETNAM</h3>
              <p className="text-gray-600">
                KFC Vietnam là thương hiệu gà rán nổi tiếng toàn cầu, mang đến cho khách hàng 
                những sản phẩm chất lượng với hương vị độc đáo. Với hơn 100 cửa hàng trên 
                toàn quốc, chúng tôi cam kết mang đến trải nghiệm ẩm thực tuyệt vời nhất.
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6">BẢN ĐỒ</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-kfc-red mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Bản đồ cửa hàng KFC Vietnam</p>
                <p className="text-gray-500 text-sm mt-2">
                  (Đây là bản đồ mẫu - tích hợp Google Maps thực tế)
                </p>
              </div>
            </div>

            {/* Store List */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">CỬA HÀNG TIÊU BIỂU</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-kfc-red pl-4">
                  <p className="font-medium">KFC Nguyễn Văn Linh</p>
                  <p className="text-gray-600 text-sm">123 Nguyễn Văn Linh, Q.7, TP.HCM</p>
                </div>
                <div className="border-l-4 border-kfc-red pl-4">
                  <p className="font-medium">KFC Phạm Ngọc Thạch</p>
                  <p className="text-gray-600 text-sm">456 Phạm Ngọc Thạch, Q.3, TP.HCM</p>
                </div>
                <div className="border-l-4 border-kfc-red pl-4">
                  <p className="font-medium">KFC Lê Lợi</p>
                  <p className="text-gray-600 text-sm">789 Lê Lợi, Q.1, TP.HCM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;