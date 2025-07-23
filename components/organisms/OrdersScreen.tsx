'use client';

import { motion } from 'framer-motion';
import KPICard from '@/components/molecules/KPICard';
import LineChart from '@/components/charts/LineChart';
import Badge from '@/components/atoms/Badge';
import {
  pendingOrders,
  salesData
} from '@/data/mockData';
import { ShoppingCart, Clock, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

const ordersKPIData = [
  {
    id: '1',
    title: 'Total de Pedidos',
    value: '2,847',
    change: 12.3,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'ShoppingCart'
  },
  {
    id: '2',
    title: 'Pedidos Pendentes',
    value: '47',
    change: -8.1,
    changeType: 'decrease' as const,
    period: 'esta semana',
    icon: 'Clock'
  },
  {
    id: '3',
    title: 'Pedidos Concluídos',
    value: '2,756',
    change: 15.7,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'CheckCircle'
  },
  {
    id: '4',
    title: 'Taxa de Conversão',
    value: '7.8%',
    change: 3.2,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'TrendingUp'
  }
];

const recentOrders = [
  { id: 'PED-001', customer: 'João Silva', status: 'pendente', total: 299.99, date: '2024-01-15', items: 3 },
  { id: 'PED-002', customer: 'Maria Santos', status: 'processando', total: 159.50, date: '2024-01-15', items: 2 },
  { id: 'PED-003', customer: 'Pedro Costa', status: 'concluído', total: 89.99, date: '2024-01-14', items: 1 },
  { id: 'PED-004', customer: 'Ana Oliveira', status: 'processando', total: 249.99, date: '2024-01-14', items: 4 },
  { id: 'PED-005', customer: 'Carlos Ferreira', status: 'concluído', total: 179.90, date: '2024-01-13', items: 2 },
  { id: 'PED-006', customer: 'Lucia Mendes', status: 'pendente', total: 399.99, date: '2024-01-13', items: 5 }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pendente':
      return 'warning';
    case 'processando':
      return 'info';
    case 'concluído':
      return 'success';
    case 'cancelado':
      return 'destructive';
    default:
      return 'secondary';
  }
};

const OrdersScreen = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Pedidos</h1>
        <p className="text-gray-600">Acompanhe e gerencie todos os pedidos da sua loja</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {ordersKPIData.map((kpi, index) => (
          <KPICard key={kpi.id} data={kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
          <LineChart data={salesData} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Pedidos Pendentes
            </h3>
            <Badge variant="warning">{pendingOrders.length} pendentes</Badge>
          </div>
          <div className="space-y-4">
            {pendingOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium text-gray-900">{order.id}</div>
                  <div className="text-sm text-gray-500">{order.customer}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    R$ {order.total.toFixed(2)}
                  </div>
                  <Badge variant={getStatusColor(order.status)} size="sm">
                    {order.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Pedidos Recentes
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">ID do Pedido</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Cliente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Itens</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Total</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Data</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 font-medium text-gray-900">{order.id}</td>
                  <td className="py-3 px-4 text-gray-700">{order.customer}</td>
                  <td className="py-3 px-4">
                    <Badge variant={getStatusColor(order.status)} size="sm">
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{order.items}</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">R$ {order.total.toFixed(2)}</td>
                  <td className="py-3 px-4 text-gray-500">{order.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default OrdersScreen;