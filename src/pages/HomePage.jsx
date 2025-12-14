import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { mockProducts, categories } from '../data/mockProducts';
import { mockPromotions } from '../data/mockPromotions';
import ProductCard from '../components/ProductCard';
import PromotionCard from '../components/PromotionCard';

const HomePage = () => {
  const featuredProducts = mockProducts.slice(0, 6);
  const featuredPromotions = mockPromotions.slice(0, 3);

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-kfc-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              THƯƠNG HIỆU GÀ RÁN SỐ 1 THẾ GIỚI
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Hương vị độc đáo - Chất lượng tuyệt hảo
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center bg-white text-kfc-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              ĐẶT HÀNG NGAY
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">DANH MỤC MÓN ĂN</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-kfc-red hover:text-white transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-kfc-red rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white">
                  <span className="text-white group-hover:text-kfc-red text-lg">🍗</span>
                </div>
                <span className="font-medium text-sm">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">SẢN PHẨM NỔI BẬT</h2>
            <Link
              to="/menu"
              className="flex items-center text-kfc-red font-semibold hover:text-red-700 transition-colors"
            >
              Xem tất cả
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">KHUYẾN MÃI HOT</h2>
            <Link
              to="/promotions"
              className="flex items-center text-kfc-red font-semibold hover:text-red-700 transition-colors"
            >
              Xem tất cả
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPromotions.map((promotion) => (
              <PromotionCard key={promotion.id} promotion={promotion} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;