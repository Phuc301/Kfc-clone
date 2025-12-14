import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = ({ 
  title = "Không có dữ liệu", 
  description = "Hiện không có nội dung nào để hiển thị.",
  showAction = false,
  actionText = "Quay lại trang chủ",
  actionLink = "/"
}) => {
  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🍗</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {showAction && (
          <Link
            to={actionLink}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kfc-red hover:bg-red-700 transition-colors duration-200"
          >
            {actionText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;