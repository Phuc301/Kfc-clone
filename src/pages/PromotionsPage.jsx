import React from 'react';
import { mockPromotions } from '../data/mockPromotions';
import PromotionCard from '../components/PromotionCard';
import EmptyState from '../components/EmptyState';

const PromotionsPage = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">KHUYẾN MÃI</h1>

        {mockPromotions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPromotions.map((promotion) => (
              <PromotionCard key={promotion.id} promotion={promotion} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Hiện không có khuyến mãi"
            description="Vui lòng quay lại sau để xem các chương trình khuyến mãi mới nhất."
            showAction={true}
            actionText="Quay lại trang chủ"
            actionLink="/"
          />
        )}
      </div>
    </div>
  );
};

export default PromotionsPage;