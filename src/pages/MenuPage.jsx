import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockProducts, categories } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import EmptyState from '../components/EmptyState';

const MenuPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return mockProducts;
    }
    return mockProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSearchParams(categoryId === 'all' ? {} : { category: categoryId });
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">THỰC ĐƠN KFC</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-kfc-red text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Không tìm thấy sản phẩm"
            description="Hiện không có sản phẩm nào trong danh mục này."
            showAction={true}
            actionText="Xem tất cả sản phẩm"
            actionLink="/menu"
          />
        )}
      </div>
    </div>
  );
};

export default MenuPage;