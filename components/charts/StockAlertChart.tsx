'use client';

import {motion} from 'framer-motion';
import {Product} from '@/types/dashboard';
import {AlertTriangle, Package} from 'lucide-react';

interface StockAlertChartProps {
  data: Product[];
}

const StockAlertChart = ({data}: StockAlertChartProps) => {
  const getStockLevel = (stock: number) => {
    if (stock <= 5) return {level: 'critical', color: 'bg-red-500', textColor: 'text-red-600', percentage: 20};
    if (stock <= 10) return {level: 'low', color: 'bg-orange-500', textColor: 'text-orange-600', percentage: 40};
    if (stock <= 20) return {level: 'medium', color: 'bg-yellow-500', textColor: 'text-yellow-600', percentage: 70};
    return {level: 'good', color: 'bg-green-500', textColor: 'text-green-600', percentage: 100};
  };

  const criticalCount = data.filter(p => p.stock <= 5).length;
  const lowCount = data.filter(p => p.stock <= 10 && p.stock > 5).length;
  const mediumCount = data.filter(p => p.stock <= 20 && p.stock > 10).length;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2"/>
          Alerta de Estoque Baixo
        </h3>
      </div>

      {/* Alert Summary Cards */}
      <div className="grid grid-cols-3 bg-gray-100 gap-3 mb-6 rounded-lg overflow-hidden">
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.1}}
          className="p-3 text-center"
        >
          <div className="text-2xl font-bold text-red-600">{criticalCount}</div>
          <div className="text-xs text-red-500">Crítico (≤5)</div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.2}}
          className="border-l-2 border-gray-200 g p-3 text-center"
        >
          <div className="text-2xl font-bold text-orange-600">{lowCount}</div>
          <div className="text-xs text-orange-500">Baixo (6-10)</div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.3}}
          className="border-l-2 border-gray-200 p-3 text-center"
        >
          <div className="text-2xl font-bold text-yellow-600">{mediumCount}</div>
          <div className="text-xs text-yellow-500">Médio (11-20)</div>
        </motion.div>
      </div>

      {/* Visual Stock Gauges */}
      <div className="space-y-3">
        {data.map((product, index) => {
          const stockInfo = getStockLevel(product.stock);

          return (
            <motion.div
              key={product.id}
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: index * 0.1 + 0.4}}
              className={`flex items-center space-x-3 ${index > 0 && "pt-3 border-t-2 border-gray-300"}`}
            >
              {/* Product Icon */}
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-gray-900"/>
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-start gap-2 mb-1">
                  <span className="text-sm font-medium text-black truncate">
                    {product.name}
                  </span>
                  <span className={`text-sm font-bold ml-auto ${stockInfo.textColor}`}>
                    {product.stock}
                  </span>
                </div>

                {/* Visual Stock Gauge */}
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{width: 0}}
                      animate={{width: `${stockInfo.percentage}%`}}
                      transition={{delay: index * 0.1 + 0.6, duration: 0.8}}
                      className={`h-full ${stockInfo.color} rounded-full`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StockAlertChart;