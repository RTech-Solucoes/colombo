'use client';

import { motion } from 'framer-motion';
import KPICard from '@/components/molecules/KPICard';
import TransporterCard from '@/components/molecules/TransporterCard';
import DonutChart from '@/components/charts/DonutChart';
import {
  transporterData
} from '@/data/mockData';
import { Truck, Clock, Star, TrendingUp, CheckCircle } from 'lucide-react';

const transportersKPIData = [
  {
    id: '1',
    title: 'Total de Transportadoras',
    value: '12',
    change: 2.1,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'Truck'
  },
  {
    id: '2',
    title: 'Taxa de Entrega no Prazo',
    value: '87.3%',
    change: 5.2,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'CheckCircle'
  },
  {
    id: '3',
    title: 'Tempo Médio de Entrega',
    value: '2.8 dias',
    change: -12.5,
    changeType: 'decrease' as const,
    period: 'este mês',
    icon: 'Clock'
  },
  {
    id: '4',
    title: 'Avaliação Média',
    value: '4.1/5',
    change: 8.7,
    changeType: 'increase' as const,
    period: 'este mês',
    icon: 'Star'
  }
];

const deliveryRegionsData = [
  { name: 'Sudeste', value: 4200, percentage: 45 },
  { name: 'Sul', value: 2800, percentage: 30 },
  { name: 'Nordeste', value: 1400, percentage: 15 },
  { name: 'Centro-Oeste', value: 700, percentage: 7 },
  { name: 'Norte', value: 280, percentage: 3 }
];

const transporterPerformanceData = [
  { id: '1', name: 'Entrega Rápida', onTimeRate: 94.2, totalDeliveries: 1240, avgDeliveryTime: 2.1, rating: 4.8, status: 'Ativo' },
  { id: '2', name: 'Express Logística', onTimeRate: 89.7, totalDeliveries: 890, avgDeliveryTime: 2.8, rating: 4.5, status: 'Ativo' },
  { id: '3', name: 'Correios Rápidos', onTimeRate: 76.3, totalDeliveries: 1560, avgDeliveryTime: 3.2, rating: 3.9, status: 'Ativo' },
  { id: '4', name: 'Transporte Ágil', onTimeRate: 68.1, totalDeliveries: 670, avgDeliveryTime: 4.1, rating: 3.2, status: 'Inativo' },
  { id: '5', name: 'Logística Premium', onTimeRate: 92.5, totalDeliveries: 450, avgDeliveryTime: 1.9, rating: 4.7, status: 'Ativo' },
  { id: '6', name: 'Entrega Nacional', onTimeRate: 81.4, totalDeliveries: 1120, avgDeliveryTime: 3.5, rating: 4.0, status: 'Ativo' }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Ativo':
      return 'bg-green-100 text-green-800';
    case 'Inativo':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getRatingColor = (rating: number) => {
  if (rating >= 4.5) return 'text-green-600';
  if (rating >= 4.0) return 'text-yellow-600';
  if (rating >= 3.5) return 'text-orange-600';
  return 'text-red-600';
};

const TransportersScreen = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Transportadoras</h1>
        <p className="text-gray-600">Monitore o desempenho e gerencie suas transportadoras parceiras</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {transportersKPIData.map((kpi, index) => (
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
                <Truck className="w-5 h-5 mr-2" />
                Desempenho das Transportadoras
              </h3>
            </div>
            <div className="space-y-4">
              {transporterData.map((transporter, index) => (
                <TransporterCard key={transporter.id} transporter={transporter} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Entregas por Região</h3>
          <DonutChart data={deliveryRegionsData} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Truck className="w-5 h-5 mr-2" />
            Todas as Transportadoras
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Nome</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Taxa no Prazo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Total Entregas</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Tempo Médio</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Avaliação</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {transporterPerformanceData.map((transporter, index) => (
                <motion.tr
                  key={transporter.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 font-medium text-gray-900">{transporter.name}</td>
                  <td className="py-3 px-4">
                    <span className={`font-semibold ${transporter.onTimeRate >= 90 ? 'text-green-600' : transporter.onTimeRate >= 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {transporter.onTimeRate}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{transporter.totalDeliveries.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-700">{transporter.avgDeliveryTime} dias</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <Star className={`w-4 h-4 mr-1 ${getRatingColor(transporter.rating)}`} fill="currentColor" />
                      <span className={`font-semibold ${getRatingColor(transporter.rating)}`}>
                        {transporter.rating}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transporter.status)}`}>
                      {transporter.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default TransportersScreen;