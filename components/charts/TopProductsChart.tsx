'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types/dashboard';
import { Package } from 'lucide-react';

interface TopProductsChartProps {
  data: Product[];
}

const TopProductsChart = ({ data }: TopProductsChartProps) => {
  const maxSales = Math.max(...data.map(p => p.sales));
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Package className="w-5 h-5 mr-2" />
          Produtos Mais Vendidos
        </h3>
      </div>
      
      <div className="space-y-6">
        {data.map((product, index) => {
          const percentage = (product.sales / maxSales) * 100;
          
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 truncate max-w-[150px]">
                    {product.name}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-gray-900">
                    {product.sales}
                  </span>
                  <span className="text-xs text-gray-500">vendas</span>
                </div>
              </div>
              
              {/* Visual bar */}
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    index === 0 ? 'bg-green-500' :
                    index === 1 ? 'bg-blue-500' :
                    index === 2 ? 'bg-purple-500' :
                    index === 3 ? 'bg-orange-500' :
                    index === 4 ? 'bg-red-500' :
                    index === 5 ? 'bg-yellow-500' :
                    index === 6 ? 'bg-pink-500' :
                    index === 7 ? 'bg-indigo-500' :
                    index === 8 ? 'bg-teal-500' :
                    'bg-gray-500'
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Quick summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-3 bg-gray-50 rounded-lg"
      >
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total de vendas (top 10):</span>
          <span className="font-bold text-gray-900">
            {data.reduce((sum, p) => sum + p.sales, 0).toLocaleString()}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default TopProductsChart;