'use client';

import { motion } from 'framer-motion';
import KPICard from '@/components/molecules/KPICard';
import ProductCard from '@/components/molecules/ProductCard';
import DonutChart from '@/components/charts/DonutChart';
import {
  topProducts,
  lowStockProducts,
  categoryData
} from '@/data/mockData';
import { Package, AlertTriangle, TrendingUp, BarChart3 } from 'lucide-react';

const productsKPIData = [
  {
    id: '1',
    title: 'Total de Produtos',
    value: '1,247',
    change: 8.2,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'Package'
  },
  {
    id: '2',
    title: 'Produtos em Estoque Baixo',
    value: '23',
    change: -12.5,
    changeType: 'decrease' as const,
    period: 'esta semana',
    icon: 'AlertTriangle'
  },
  {
    id: '3',
    title: 'Categorias Ativas',
    value: '12',
    change: 2.1,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'BarChart3'
  },
  {
    id: '4',
    title: 'Valor Total do Estoque',
    value: 'R$ 89.432',
    change: 15.3,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'TrendingUp'
  }
];

const ProductsScreen = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Produtos</h1>
        <p className="text-gray-600">Gerencie seu inventário e acompanhe o desempenho dos produtos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {productsKPIData.map((kpi, index) => (
          <KPICard key={kpi.id} data={kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Produtos Mais Vendidos
              </h3>
            </div>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                Alerta de Estoque Baixo
              </h3>
            </div>
            <div className="space-y-4">
              {lowStockProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} showStock />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <DonutChart data={categoryData} />
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;