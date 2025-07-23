'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types/dashboard';
import Badge from '@/components/atoms/Badge';
import { Package, TrendingUp, Smartphone, Cable, Shirt } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
  showStock?: boolean;
}

const ProductCard = ({ product, index, showStock = false }: ProductCardProps) => {
  const getStockStatus = (stock: number) => {
    if (stock <= 10) return { variant: 'danger' as const, text: 'Estoque Baixo' };
    if (stock <= 20) return { variant: 'warning' as const, text: 'Estoque Médio' };
    return { variant: 'success' as const, text: 'Em Estoque' };
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Eletrônicos':
        return Smartphone;
      case 'Acessórios':
        return Cable;
      case 'Roupas':
        return Shirt;
      default:
        return Package;
    }
  };

  const stockStatus = getStockStatus(product.stock);
  const CategoryIcon = getCategoryIcon(product.category);

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
          <CategoryIcon className="w-5 h-5 text-gray-600" />
        </div>
        
        <div className="flex-1">
          <h4 className="font-medium text-gray-900">{product.name}</h4>
          <div className="flex items-center space-x-3 mt-1">
            <span className="text-sm text-gray-500">{product.category}</span>
            {showStock && (
              <Badge variant={stockStatus.variant} size="sm">
                {product.stock} em estoque
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
        <span className="text-sm text-gray-500">vendas</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;