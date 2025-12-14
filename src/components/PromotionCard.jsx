import React from 'react';
import { Tag } from 'lucide-react';

const PromotionCard = ({ promotion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={promotion.image}
        alt={promotion.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-xl">{promotion.title}</h3>
          {promotion.discountPercent > 0 && (
            <div className="bg-kfc-red text-white px-3 py-1 rounded-full flex items-center space-x-1">
              <Tag className="h-4 w-4" />
              <span className="font-semibold">-{promotion.discountPercent}%</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">
          {promotion.description}
        </p>
        
        <div className="text-sm text-gray-500">
          Áp dụng đến: {new Date(promotion.validUntil).toLocaleDateString('vi-VN')}
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;