'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types/dashboard';
import Badge from '@/components/atoms/Badge';
import { Package, TrendingUp } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
  showStock?: boolean;
}

const ProductCard = ({ product, index, showStock = false }: ProductCardProps) => {
  const getStockStatus = (stock: number) => {
    if (stock <= 10) return { variant: 'danger' as const, text: 'Low Stock' };
    if (stock <= 20) return { variant: 'warning' as const, text: 'Medium Stock' };
    return { variant: 'success' as const, text: 'In Stock' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <Package className="w-5 h-5 text-gray-600" />
        </div>
        
        <div className="flex-1">
          <h4 className="font-medium text-gray-900">{product.name}</h4>
          <div className="flex items-center space-x-3 mt-1">
            <span className="text-sm text-gray-500">{product.category}</span>
            {showStock && (
              <Badge variant={stockStatus.variant} size="sm">
                {product.stock} left
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="font-semibold text-gray-900">{product.sales}</span>
        </div>
        <span className="text-sm text-gray-500">sales</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;