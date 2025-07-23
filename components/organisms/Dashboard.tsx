'use client';

import { motion } from 'framer-motion';
import KPICard from '@/components/molecules/KPICard';
import LineChart from '@/components/charts/LineChart';
import DonutChart from '@/components/charts/DonutChart';
import TopProductsChart from '@/components/charts/TopProductsChart';
import StockAlertChart from '@/components/charts/StockAlertChart';
import TransporterPerformanceChart from '@/components/charts/TransporterPerformanceChart';
import PendingOrdersChart from '@/components/charts/PendingOrdersChart';
import {
  kpiData,
  topProducts,
  lowStockProducts,
  transporterData,
  salesData,
  categoryData,
  pendingOrders
} from '@/data/mockData';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Visão Geral</h1>
        <p className="text-gray-600">Acompanhe o desempenho geral da sua loja online</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => (
          <KPICard key={kpi.id} data={kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <LineChart data={salesData} />
        </div>

        <div className=" bg-white rounded-2xl p-6 border border-gray-100">
          <DonutChart data={categoryData} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <TopProductsChart data={topProducts} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <TransporterPerformanceChart data={transporterData} />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <StockAlertChart data={lowStockProducts} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <PendingOrdersChart data={pendingOrders} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;