'use client';

import { motion } from 'framer-motion';
import KPICard from '@/components/molecules/KPICard';
import ProductCard from '@/components/molecules/ProductCard';
import TransporterCard from '@/components/molecules/TransporterCard';
import LineChart from '@/components/charts/LineChart';
import DonutChart from '@/components/charts/DonutChart';
import Badge from '@/components/atoms/Badge';
import {
  kpiData,
  topProducts,
  lowStockProducts,
  transporterData,
  salesData,
  categoryData,
  pendingOrders
} from '@/data/mockData';
import { AlertTriangle, Package, Truck, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => (
          <KPICard key={kpi.id} data={kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
          <LineChart data={salesData} />
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
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
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Top Selling Products
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
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
              Low Stock Alert
            </h3>
          </div>
          <div className="space-y-4">
            {lowStockProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} showStock />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Truck className="w-5 h-5 mr-2" />
              Transporter Performance
            </h3>
          </div>
          <div className="space-y-4">
            {transporterData.map((transporter, index) => (
              <TransporterCard key={transporter.id} transporter={transporter} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Pending Orders
            </h3>
            <Badge variant="warning">{pendingOrders.length} pending</Badge>
          </div>
          <div className="space-y-4">
            {pendingOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium text-gray-900">{order.id}</div>
                  <div className="text-sm text-gray-500">{order.customer}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    ${order.total}
                  </div>
                  <Badge variant={order.status === 'pending' ? 'warning' : 'info'} size="sm">
                    {order.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;