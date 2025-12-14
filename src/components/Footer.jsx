import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-kfc-red text-white px-4 py-2 rounded-lg inline-block mb-4">
              <h2 className="text-2xl font-bold">KFC</h2>
              <p className="text-xs">VIETNAM</p>
            </div>
            <p className="text-gray-300 mb-4">
              KFC Vietnam - Thương hiệu gà rán số 1 thế giới. Chúng tôi cam kết mang đến 
              những sản phẩm chất lượng nhất với hương vị đặc trưng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-300 hover:text-white transition-colors">Thực Đơn</Link></li>
              <li><Link to="/promotions" className="text-gray-300 hover:text-white transition-colors">Khuyến Mãi</Link></li>
              <li><Link to="/tracking" className="text-gray-300 hover:text-white transition-colors">Theo Dõi Đơn Hàng</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-kfc-red" />
                <span className="text-gray-300">1900 1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-kfc-red" />
                <span className="text-gray-300">contact@kfcvietnam.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-kfc-red mt-1" />
                <span className="text-gray-300">
                  123 Nguyễn Văn Linh, Quận 7, TP.HCM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 KFC Vietnam. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;